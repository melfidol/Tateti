/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from 'react-router-dom'
import inicio from './inicio.module.css'

const ipcRenderer = window.require("electron").ipcRenderer

function Index() {
    return (
        <div className={inicio.main}>
            <div className={inicio.span_container}>
                <span id={inicio['ta']}>Ta</span>
                <span id={inicio['te']}>Te</span>
                <span id={inicio['ti']}>Ti</span>
            </div>
            <div className={[inicio.block, inicio.glow].join(" ")}>
            </div>
            <div className={inicio.menu}>
                <Link to="Tateti">
                    <a className={inicio.menu_button}>
                    <span id={inicio['span1']}></span>
                    <span id={inicio['span2']}></span>
                    <span id={inicio['span3']}></span>
                    <span id={inicio['span4']}></span>
                    PLAY GAME
                    </a>
                </Link>
                <Link to="">
                <a className={inicio.menu_button}>
                    <span id={inicio['span1']}></span>
                    <span id={inicio['span2']}></span>
                    <span id={inicio['span3']}></span>
                    <span id={inicio['span4']}></span>
                    HOW TO PLAY
                </a>
                </Link>
                <a id="quit_btn"onClick={e => ipcRenderer.send('close')} className={inicio.menu_button}>
                    <span id={inicio['span1']}></span>
                    <span id={inicio['span2']}></span>
                    <span id={inicio['span3']}></span>
                    <span id={inicio['span4']}></span>
                    QUIT GAME
                </a>
            </div>
        </div>

    )
}
export default Index