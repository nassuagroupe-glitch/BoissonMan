; Builds the standalone Windows installer for shop PCs that need the
; offline-capable local-server install (as opposed to just opening the
; hosted Railway URL — see installer/build.ps1 for the one-command rebuild
; that keeps this in sync with the current app code).
#define MyAppName "BoissonMan"
#define MyAppVersion "1.2"
#define MyAppExeName "BoissonMan.vbs"
#ifndef DistDir
  #define DistDir "dist"
#endif

[Setup]
AppId={{6C9F6B1A-6E8C-4E0C-9C9E-7C8F0A2B7C41}
AppName={#MyAppName}
AppVersion={#MyAppVersion}
DefaultDirName={localappdata}\Programs\{#MyAppName}
DefaultGroupName={#MyAppName}
DisableProgramGroupPage=yes
PrivilegesRequired=lowest
OutputDir=out
OutputBaseFilename=BoissonMan-Setup
SetupIconFile={#DistDir}\deploy\icon.ico
Compression=lzma2
SolidCompression=yes
WizardStyle=modern

[Languages]
Name: "french"; MessagesFile: "compiler:Languages\French.isl"

[Tasks]
Name: "desktopicon"; Description: "Créer un raccourci sur le Bureau"; GroupDescription: "Raccourcis supplémentaires:"; Flags: checkedonce

[Files]
Source: "{#DistDir}\node\node.exe"; DestDir: "{app}\node"; Flags: ignoreversion
Source: "{#DistDir}\server.js"; DestDir: "{app}"; Flags: ignoreversion
Source: "{#DistDir}\public\*"; DestDir: "{app}\public"; Flags: ignoreversion recursesubdirs createallsubdirs
Source: "{#DistDir}\BoissonMan.vbs"; DestDir: "{app}"; Flags: ignoreversion
Source: "{#DistDir}\deploy\icon.ico"; DestDir: "{app}\deploy"; Flags: ignoreversion

[Icons]
Name: "{group}\{#MyAppName}"; Filename: "{app}\{#MyAppExeName}"; IconFilename: "{app}\deploy\icon.ico"
Name: "{group}\Désinstaller {#MyAppName}"; Filename: "{uninstallexe}"
Name: "{userdesktop}\{#MyAppName}"; Filename: "{app}\{#MyAppExeName}"; IconFilename: "{app}\deploy\icon.ico"; Tasks: desktopicon

[Run]
Filename: "{app}\{#MyAppExeName}"; Description: "Lancer {#MyAppName}"; Flags: nowait postinstall skipifsilent shellexec
