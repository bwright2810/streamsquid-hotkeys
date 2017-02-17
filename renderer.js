// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
let electron = require('electron');
let ipcRenderer = electron.ipcRenderer;

ipcRenderer.on('ping', function(event, message) {
    let webView = document.getElementById('mainWebview');
    let code;
    if (message === "play-pause") {
        code = "var playElement = document.getElementById('player-play');" +
        "if (playElement.style.display !== 'none') { " +
            "playElement.click(); " +
        "} else { " +
            " document.getElementById('player-pause').click(); " +
        "}";
    } else if (message === "next") {
        code = "document.getElementById('player-next').click();";
    } else if (message == "previous") {
        code = "document.getElementById('player-back').click();";
    }
    webView.executeJavaScript(code);
});