<#
.SYNOPSIS
  Rebuilds the "online" NassuaGroup/BoissonMan Setup (a tiny launcher-only
  installer, no bundled server/data) and copies it to the Desktop\Logiciels
  .EXE folder, alongside — but distinct from — the offline installer built
  by build.ps1.

.DESCRIPTION
  There's nothing to stage here (no Node.exe, no app code to bundle) since
  this installer only ever puts a Desktop/Start Menu shortcut that opens the
  live Railway-hosted app in a dedicated browser window. Every launch shows
  whatever is currently deployed and lets the user log into any real shop
  with their own credentials - so unlike build.ps1, a rebuild is only ever
  needed if the launcher/installer mechanics themselves change (e.g. the
  Railway URL), never for an app-content update.

.PARAMETER Test
  Also runs a silent install into an isolated scratch folder afterward,
  confirms the expected files land correctly, then cleans up - without ever
  touching the real Desktop (passes /TASKS= to avoid the real-Desktop
  side effect a plain /VERYSILENT run has by default).
#>
param(
  [string]$OutputPath = "C:\Users\surface\Desktop\Logiciels .EXE\NassuaGroup-Online-Setup.exe",
  [switch]$Test
)
$ErrorActionPreference = "Stop"

$installerDir = $PSScriptRoot

$outDir = "$installerDir\out"
if (Test-Path $outDir) { Remove-Item -Recurse -Force $outDir }

$iscc = "C:\Users\surface\AppData\Local\Programs\Inno Setup 6\ISCC.exe"
if (-not (Test-Path $iscc)) { throw "Inno Setup 6 not found at $iscc" }
& $iscc "$installerDir\BoissonManOnline.iss"
if ($LASTEXITCODE -ne 0) { throw "Inno Setup compile failed (exit $LASTEXITCODE)" }

$builtExe = "$outDir\NassuaGroup-Online-Setup.exe"
if (-not (Test-Path $builtExe)) { throw "Expected output not found: $builtExe" }

if ($Test) {
  $testDir = "$env:TEMP\NassuaGroupOnline-installer-test"
  if (Test-Path $testDir) { Remove-Item -Recurse -Force $testDir }
  Write-Host "Test-installing to isolated scratch dir (no Desktop shortcut, per /TASKS override)..."
  Start-Process -FilePath $builtExe -ArgumentList "/VERYSILENT","/SUPPRESSMSGBOXES","/NORESTART","/TASKS=","/DIR=`"$testDir`"" -Wait
  $expected = @("BoissonManOnline.vbs","deploy\icon.ico","unins000.exe")
  foreach ($f in $expected) {
    if (-not (Test-Path "$testDir\$f")) { throw "Test install missing expected file: $f" }
  }
  Write-Host "Test install OK: expected files present. (Actual browser-launch behavior of the .vbs isn't exercised here - VBScript shell-executes a real OS browser window, which needs manual/GUI verification, same limitation as the rest of this project's installer tooling.)"
  Remove-Item -Recurse -Force $testDir -ErrorAction SilentlyContinue
}

$destDir = Split-Path -Parent $OutputPath
if (-not (Test-Path $destDir)) { New-Item -ItemType Directory -Force -Path $destDir | Out-Null }
Copy-Item $builtExe $OutputPath -Force
Write-Host "Online installer rebuilt: $OutputPath"
