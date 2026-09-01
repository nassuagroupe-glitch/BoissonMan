<#
.SYNOPSIS
  Rebuilds the standalone BoissonMan Windows installer from the current
  repo state and copies it to the Desktop\Logiciels .EXE folder.

.DESCRIPTION
  Node.exe is downloaded once and cached outside the repo (installers are
  binary blobs, not something to commit to git) at
  %LOCALAPPDATA%\BoissonMan-installer-cache - later runs reuse it, so a
  normal rebuild only re-copies server.js/public/* and recompiles, which is
  fast. Requires Inno Setup 6 (ISCC.exe) already installed.

.PARAMETER Test
  Also runs a silent install into an isolated scratch folder afterward,
  boots the bundled node.exe, confirms it serves the app and that a fresh
  install auto-seeds a working login, then cleans up - without ever
  touching the real Desktop (passes /TASKS= specifically to avoid the
  real-Desktop side effect a plain /VERYSILENT run has by default; see the
  2026-08-27 project notes on this exact gotcha).
#>
param(
  [string]$NodeVersion = "24.18.0",
  [string]$OutputPath = "C:\Users\surface\Desktop\Logiciels .EXE\BoissonMan-Setup.exe",
  [switch]$Test
)
$ErrorActionPreference = "Stop"

$installerDir = $PSScriptRoot
$repoRoot = Split-Path -Parent $installerDir
$cacheDir = "$env:LOCALAPPDATA\BoissonMan-installer-cache"
$nodeDirName = "node-v$NodeVersion-win-x64"
$nodeCachePath = "$cacheDir\$nodeDirName\node.exe"

if (-not (Test-Path $nodeCachePath)) {
  Write-Host "Downloading node.exe v$NodeVersion (first build only - cached afterward at $cacheDir)..."
  New-Item -ItemType Directory -Force -Path $cacheDir | Out-Null
  $zipPath = "$cacheDir\node-win-x64.zip"
  Invoke-WebRequest -Uri "https://nodejs.org/dist/v$NodeVersion/$nodeDirName.zip" -OutFile $zipPath
  Expand-Archive -Path $zipPath -DestinationPath $cacheDir -Force
  Remove-Item $zipPath
}

$distDir = "$env:TEMP\BoissonMan-installer-dist"
if (Test-Path $distDir) { Remove-Item -Recurse -Force $distDir }
New-Item -ItemType Directory -Force -Path "$distDir\node" | Out-Null
New-Item -ItemType Directory -Force -Path "$distDir\deploy" | Out-Null
Copy-Item $nodeCachePath "$distDir\node\node.exe"
Copy-Item "$repoRoot\server.js" "$distDir\server.js"
# storage-firestore.js/sessions-firestore.js/firebase-admin-client.js are
# deliberately NOT bundled here — the installer never sets
# FIRESTORE_PROJECT_ID, so storage.js/sessions.js never require() them; only
# the file-backed adapters below are ever reachable on this install path.
Copy-Item "$repoRoot\storage.js" "$distDir\storage.js"
Copy-Item "$repoRoot\storage-file.js" "$distDir\storage-file.js"
Copy-Item "$repoRoot\sessions.js" "$distDir\sessions.js"
Copy-Item "$repoRoot\sessions-memory.js" "$distDir\sessions-memory.js"
Copy-Item "$repoRoot\public" "$distDir\public" -Recurse
Copy-Item "$installerDir\BoissonMan.vbs" "$distDir\BoissonMan.vbs"
Copy-Item "$repoRoot\deploy\icon.ico" "$distDir\deploy\icon.ico"

$outDir = "$installerDir\out"
if (Test-Path $outDir) { Remove-Item -Recurse -Force $outDir }

$iscc = "C:\Users\surface\AppData\Local\Programs\Inno Setup 6\ISCC.exe"
if (-not (Test-Path $iscc)) { throw "Inno Setup 6 not found at $iscc" }
& $iscc "$installerDir\BoissonMan.iss" "/DDistDir=$distDir"
if ($LASTEXITCODE -ne 0) { throw "Inno Setup compile failed (exit $LASTEXITCODE)" }

$builtExe = "$outDir\BoissonMan-Setup.exe"
if (-not (Test-Path $builtExe)) { throw "Expected output not found: $builtExe" }

if ($Test) {
  $testDir = "$env:TEMP\BoissonMan-installer-test"
  if (Test-Path $testDir) { Remove-Item -Recurse -Force $testDir }
  Write-Host "Test-installing to isolated scratch dir (no Desktop shortcut, per /TASKS override)..."
  Start-Process -FilePath $builtExe -ArgumentList "/VERYSILENT","/SUPPRESSMSGBOXES","/NORESTART","/TASKS=","/DIR=`"$testDir`"" -Wait
  $expected = @("node\node.exe","server.js","storage.js","storage-file.js","sessions.js","sessions-memory.js","public\index.html","BoissonMan.vbs","deploy\icon.ico","unins000.exe")
  foreach ($f in $expected) {
    if (-not (Test-Path "$testDir\$f")) { throw "Test install missing expected file: $f" }
  }
  $proc = Start-Process -FilePath "$testDir\node\node.exe" -ArgumentList "server.js" -WorkingDirectory $testDir -PassThru -WindowStyle Hidden
  Start-Sleep -Seconds 2
  try {
    $resp = Invoke-WebRequest -Uri "http://127.0.0.1:8791/api/login" -Method POST -ContentType "application/json" `
      -Body '{"username":"+226 70 00 00 01","password":"1234","expectedRole":"manager"}' -UseBasicParsing -TimeoutSec 5
    if ($resp.StatusCode -ne 200) { throw "Fresh-install login smoke test returned HTTP $($resp.StatusCode)" }
    Write-Host "Test install OK: bundled server boots and the auto-seeded manager login works."
  } finally {
    Stop-Process -Id $proc.Id -Force -ErrorAction SilentlyContinue
  }
  Remove-Item -Recurse -Force $testDir -ErrorAction SilentlyContinue
}

$destDir = Split-Path -Parent $OutputPath
if (-not (Test-Path $destDir)) { New-Item -ItemType Directory -Force -Path $destDir | Out-Null }
Copy-Item $builtExe $OutputPath -Force
Write-Host "Installer rebuilt: $OutputPath"
