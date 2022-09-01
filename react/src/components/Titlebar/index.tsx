import style from './Titlebar.module.css' 

function Titlebar(){
    return(
        <div id="barra" className={style.barra}>
        <button id="botonMenu" className={[style.botonBarra, style.botonMenu].join(" ")} value="M" title='lam'></button>
        <div id="titulobarra" className={style.titulobarra}>TTT</div>
        <div id="botones" className={style.botones}>
            <button id="botonMin" className={[style.botonBarra, style.botonMin].join(" ")} value="-" title='lam'></button>
            <button id="botonMax" className={[style.botonBarra, style.botonMax].join(" ")} value="C" title='lam'></button>
            <button id="botonCerrar" className={[style.botonBarra, style.botonCerrar].join(" ")} value="X" title='lam'></button>
        </div>
    </div>
    )
}

export default Titlebar;