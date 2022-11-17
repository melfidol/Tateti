import { useState } from 'react'
import { Link } from 'react-router-dom'
import Title from '../Title'
import style from './Titlebar.module.css' 
const ipcRenderer = window.require("electron").ipcRenderer

function Titlebar(){

    const [isMaximized,setIsMaximized] = useState(false)
    const [isFocused,setIsFocused] = useState(false)

    ipcRenderer.on("isMaximized", () => {
        setIsMaximized(true)
    })
    ipcRenderer.on("isRestored", () => {
        setIsMaximized(false)
    })
    ipcRenderer.on("isFocused", () => {
        setIsFocused(true)
    })
        
    ipcRenderer.on("isInactive", () => {
    setIsFocused(false)
    })
        
    return(
        <div className={style.barra}>
            <Link to="/">
                <button title='menu' className={[style.botonBarra, style.botonMenu].join(" ")}></button> 
            </Link>
            <Link to="goals">
                <button title='goals' className={[style.botonBarra, style.botonGoals].join(" ")}></button> 
            </Link>
            <Title/>
            <div className={style.botones}>
                <button title='minimize' onClick={e => ipcRenderer.send('minimize')} className={[style.botonBarra, style.botonMin].join(" ")}  ></button>
                <button title={isMaximized ? 'unmaximize' : 'maximize'} onClick={e => ipcRenderer.send('maximizeRestoreApp')} style={{backgroundImage : isMaximized ?  "url('/source/icon_restore.png')" : "url('/source/icon_maximize.png')"}} className={[style.botonBarra, style.botonMax].join(" ")} ></button>
                <button title='close' onClick={e => ipcRenderer.send('close')} className={[style.botonBarra, style.botonCerrar].join(" ")} ></button>
            </div>
        </div>
    )
}

export default Titlebar;