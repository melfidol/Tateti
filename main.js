// Modules to control application life and create native browser window
const {app, BrowserWindow, ipcMain} = require('electron')
const path = require('path')
require("./database")

const { GoalsFind, GoalsDelete } = require("./database");

require('electron-reload')(__dirname, {
  electron: path.join(__dirname, 'node_modules', '.bin', 'electron'),
  hardResetMethod: 'exit'
});

function createWindow () {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    frame: false,
    minWidth: 530,
    minHeight: 600, 
    
    
    //transparent: true, //saca el background default
    webPreferences: {
        
        nodeIntegration: true, 
        contextIsolation: false, //para poder personalizar la barra
        devTools: true //define si se puede abrir o no el inspeccionar
      // preload: path.join(__dirname, 'preload.js')
    }
  })

  // and load the index.html of the app.
  mainWindow.loadURL('http://localhost:3000')




  // Open the DevTools.
  // mainWindow.webContents.openDevTools()

  //EVENTO minimizar
  ipcMain.on("minimize", () => {
    mainWindow.minimize()
  })

  //EVENTO CERRAR
  ipcMain.on("close", () => {
    mainWindow.close()
  } )

  mainWindow.on("maximize", () => {
    mainWindow.webContents.send("isMaximized")
  })

  mainWindow.on("unmaximize", () => {
    mainWindow.webContents.send("isRestored")
  })

  ipcMain.on('maximizeRestoreApp', () => {
    if (mainWindow.isMaximized()) mainWindow.unmaximize()
    else mainWindow.maximize()
  })

  //FOCUS Y BLUR
  mainWindow.on("focus", () => {
    mainWindow.webContents.send("isFocus")
  })
  mainWindow.on("blur", () => {
    mainWindow.webContents.send("isInactive")
  })
}

  




// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow()

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

ipcMain.on("getGoals", (e) => {
  GoalsFind().then(goalsQuery => {
    console.log(goalsQuery);
    let goals = goalsQuery.map(e => e._doc)
    e.reply("goals", goals)
  })
})

ipcMain.on("delete-goal", (e, idGoal) => {
  console.log("BORRAR: ", idGoal);

  GoalDelete(idGoal).then(r => {
    console.log(r)
    console.log("CORRECTO")

    e.reply("deleted-goal", idGoal)
  }).catch(e => {
    console.log("ERROR: ", e)
  })
})
