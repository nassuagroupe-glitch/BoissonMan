' Launches the BoissonMan local server (if not already running) and opens
' the app in a dedicated Chrome window (no tabs/address bar).
Dim shell, fso, scriptDir, nodeExe, chromeExe, serverJs, url
Set shell = CreateObject("WScript.Shell")
Set fso = CreateObject("Scripting.FileSystemObject")
scriptDir = fso.GetParentFolderName(WScript.ScriptFullName)
serverJs = """" & scriptDir & "\..\server.js" & """"
url = "http://127.0.0.1:8791/"

' Start the server hidden. If it's already running on the port, server.js
' exits immediately on its own (EADDRINUSE), so this is safe to run every
' time the shortcut is clicked.
' Uses the full path to node.exe rather than relying on PATH: nodejs's
' install folder is not in the persisted Machine/User PATH on this PC, so
' a bare "node" command would fail to resolve after a reboot / new session.
nodeExe = "C:\Program Files\nodejs\node.exe"
If Not fso.FileExists(nodeExe) Then
  nodeExe = "C:\Program Files (x86)\nodejs\node.exe"
End If
shell.CurrentDirectory = fso.GetParentFolderName(scriptDir)
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
