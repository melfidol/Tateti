import './title.scss' 

function Title(){
var $text = "TTT"
    return(
        <div id='ui'>{
            (new Array(26).fill(null)).map(item=>
                <div className='text'>{ $text }</div>)
            }    
        </div>
    );
}
export default Title;