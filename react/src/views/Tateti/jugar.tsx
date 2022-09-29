import { Link } from 'react-router-dom'
const ipcRenderer = window.require("electron").ipcRenderer

function Jugar() {
    return (
        <div className="main">
            <h1>Jugar</h1>
            <Link to="/"><h4>Volver al inicio</h4></Link>
            
        </div>
    )
}

export default Jugar
