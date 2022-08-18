

const { ipcRenderer } = require("electron");

//cuando apretamos el boton:
function delete-Task(numberTask) {
    tasks = tasksList.find((e, index) => index == numberTask)

    let idTask = tasks._id
    ipcRenderer.send("delete-task", idTask)
}
ipcRenderer.send("delete-task", idTask)


ipcRenderer.on("deleted-task", (e, idTask) => {
    console.log(idTask)
    alert("Tarea borrada: ", idTask);
})

/*en main.js para q el proceso escuche el msj para borrar:

ipcMain.on("delete-task", (e, idTask) => {
    console.log("BORRAR: ", idTask);

    TaskDelete(idTask).then(r => {
        console.log("CORRECTO")

        e.reply("deleted-task", idTask)
    }).catch(e => {
        console.log("ERROR: ", e)
    })

    //responde que borro la tarea 
    e.reply("deleted-task", idTask) 
})

//para q la base de datos borre la tarea
module.exports = {
    TasksFind: () => tas
    TaskDelete: (id) => Task.deleteOne({ _id });
}

*/