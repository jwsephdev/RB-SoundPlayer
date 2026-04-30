const { ipcMain, dialog } = require('electron')
const { app, BrowserWindow } = require('electron/main')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
  })

  win.loadFile('index.html')
  win.setMenuBarVisibility(false)
  win.webContents.openDevTools();
}

app.whenReady().then(() => {
  createWindow()
})