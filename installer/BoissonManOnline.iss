; Builds the "online" NassuaGroup/BoissonMan Setup — a tiny installer that
; puts a Desktop/Start Menu shortcut opening the live Railway-hosted app in a
; dedicated browser window. No bundled Node.js, no local server, no local
; database: every launch shows the current deployed app and lets the user
; log into any real shop (existing or newly created) with their own
; credentials. Separate, deliberately, from BoissonMan.iss (the offline
; installer with a bundled local server + local data) — see
; installer/build-online.ps1 for the one-command rebuild.
#define MyAppName "NassuaGroup (en ligne)"
#define MyAppVersion "1.0"
#define MyAppExeName "BoissonManOnline.vbs"

[Setup]
AppId={{4A147210-A763-4BF1-B6BF-25235A12006F}
AppName={#MyAppName}
AppVersion={#MyAppVersion}
DefaultDirName={localappdata}\Programs\NassuaGroupOnline
DefaultGroupName={#MyAppName}
DisableProgramGroupPage=yes
PrivilegesRequired=lowest
OutputDir=out
OutputBaseFilename=NassuaGroup-Online-Setup
SetupIconFile=..\deploy\icon.ico
Compression=lzma2
SolidCompression=yes
WizardStyle=modern

[Languages]
Name: "french"; MessagesFile: "compiler:Languages\French.isl"

[Tasks]
Name: "desktopicon"; Description: "Créer un raccourci sur le Bureau"; GroupDescription: "Raccourcis supplémentaires:"; Flags: checkedonce

[Files]
Source: "BoissonManOnline.vbs"; DestDir: "{app}"; Flags: ignoreversion
Source: "..\deploy\icon.ico"; DestDir: "{app}\deploy"; Flags: ignoreversion

[Icons]
Name: "{group}\{#MyAppName}"; Filename: "{app}\{#MyAppExeName}"; IconFilename: "{app}\deploy\icon.ico"
Name: "{group}\Désinstaller {#MyAppName}"; Filename: "{uninstallexe}"
Name: "{userdesktop}\{#MyAppName}"; Filename: "{app}\{#MyAppExeName}"; IconFilename: "{app}\deploy\icon.ico"; Tasks: desktopicon

[Run]
Filename: "{app}\{#MyAppExeName}"; Description: "Lancer {#MyAppName}"; Flags: nowait postinstall skipifsilent shellexec
