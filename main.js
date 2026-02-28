const { app, BrowserWindow } = require('electron');

function createWindow() {
    const win = new BrowserWindow({
        width: 500,
        height: 400,
        show: true
    });

    win.loadFile('index.html');

    win.webContents.openDevTools(); // Opens dev tools so we can see errors
}

app.whenReady().then(() => {
    createWindow();
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});