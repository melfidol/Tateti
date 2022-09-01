import style from './Titlebar.module.css' 

function Titlebar(){
    return(
        <div id="barra">
        <button id="botonMenu" className={style.botonBarra} value="M" title='lam'></button>
        <div id="titulobarra">TTT</div>
        <div id="botones">
            <button id="botonMin" className={style.botonBarra} value="-" title='lam'></button>
            <button id="botonMax" className={style.botonBarra} value="C" title='lam'></button>
            <button id="botonCerrar" className={style.botonBarra} value="X" title='lam'></button>
        </div>
    </div>
    )
}

export default Titlebar;