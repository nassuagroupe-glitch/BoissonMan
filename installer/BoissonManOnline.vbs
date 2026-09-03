' Opens the live, always-up-to-date BoissonMan / NassuaGroup app hosted on
' Railway, in a dedicated browser window (no tabs/address bar). No local
' server, no local data — every launch shows whatever is currently deployed
' and lets the user log into any shop (existing or newly created) with their
' own real credentials. Mirrors the dev machine's own
' AppData\Local\BoissonMan\Ouvrir-BoissonMan.vbs launcher and the Android
' APK's WebView, which both already work this way.
Dim shell, fso, chromeExe, url
Set shell = CreateObject("WScript.Shell")
Set fso = CreateObject("Scripting.FileSystemObject")
url = "https://boissonman-production.up.railway.app/"

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
