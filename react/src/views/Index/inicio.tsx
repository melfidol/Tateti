import { Link } from 'react-router-dom'
import './inicio.css'
const ipcRenderer = window.require("electron").ipcRenderer

function Index() {
    return (
        <div className="main">
            
            <div className="span_container">
                <span id='ta'>Ta</span>
                <span id='te'>Te</span>
                <span id='ti'>Ti</span>
            </div>
            <div className={["glow", "block"].join(" ")}>
            </div>
            <div className="menu">
                <Link to="Tateti">
                    <a className="menu_button">
                    <span id="span1"></span>
                    <span id="span2"></span>
                    <span id="span3"></span>
                    <span id="span4"></span>
                    PLAY GAME
                    </a>
                </Link>
                
                <a href="rules.html" className="menu_button">
                    <span id="span1"></span>
                    <span id="span2"></span>
                    <span id="span3"></span>
                    <span id="span4"></span>
                    HOW TO PLAY
                </a>
                <a id="quit_btn" href="" onClick={e => ipcRenderer.send('close')} className="menu_button">
                    <span id="span1"></span>
                    <span id="span2"></span>
                    <span id="span3"></span>
                    <span id="span4"></span>
                    QUIT GAME
                </a>
            </div>

            <audio src="/source/wap.mp3" itemType='mp3' autoPlay loop></audio>
        </div>

    )
}
export default Index