' Launches the installed BoissonMan server (bundled node.exe, if not already
' running) and opens the app in a dedicated browser window (no tabs/address
' bar). Unlike the dev-machine launcher (deploy/Lancer-BoissonMan.vbs), every
' path here is resolved relative to this script's own location so it works
' regardless of the exact install directory (per-user LocalAppData install,
' no fixed path).
Dim shell, fso, scriptDir, nodeExe, chromeExe, serverJs, url
Set shell = CreateObject("WScript.Shell")
Set fso = CreateObject("Scripting.FileSystemObject")
scriptDir = fso.GetParentFolderName(WScript.ScriptFullName)
nodeExe = scriptDir & "\node\node.exe"
serverJs = """" & scriptDir & "\server.js" & """"
url = "http://127.0.0.1:8791/"

' Start the server hidden. If it's already running on the port, server.js
' exits immediately on its own (EADDRINUSE), so this is safe to run every
' time the shortcut is clicked.
shell.CurrentDirectory = scriptDir
shell.Run """" & nodeExe & """ " & serverJs, 0, False

' Give the server a brief moment to bind before the browser requests it.
WScript.Sleep 700

chromeExe = "C:\Program Files\Google\Chrome\Application\chrome.exe"
If Not fso.FileExists(chromeExe) Then
  chromeExe = "C:\Program Files (x86)\Google\Chrome\Application\chrome.exe"
End If

If fso.FileExists(chromeExe) Then
  shell.Run """" & chromeExe & """ --app=" & url, 1, False
Else
  Dim edgeExe
  edgeExe = "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
  If fso.FileExists(edgeExe) Then
    shell.Run """" & edgeExe & """ --app=" & url, 1, False
  Else
    shell.Run url, 1, False
  End If
End If
