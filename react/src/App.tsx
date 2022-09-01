import './App.css';
import Titlebar from './components/Titlebar';

function App() {
  return (

    <div className='mainApp'>
      <Titlebar />
    <div className="span_container">
              <span id='ta'>Ta</span>
              <span id='te'>Te</span>
              <span id='ti'>Ti</span>
      </div> 
      <div className="block glow">
      </div>
      <div className="menu">
      <a href="levels/tateti.html" className="menu_button">
          <span id="span1"></span>
          <span id="span2"></span>
          <span id="span3"></span>
          <span id="span4"></span>
          PLAY GAME
      </a>
      <a href="rules.html" className="menu_button">
          <span id="span1"></span>
          <span id="span2"></span>
          <span id="span3"></span>
          <span id="span4"></span>
          HOW TO PLAY
      </a>
      <a id="quit_btn" href="" onClick={e => closeApp()} className="menu_button">
          <span id="span1"></span>
          <span id="span2"></span>
          <span id="span3"></span>
          <span id="span4"></span>
          QUIT GAME
      </a>
      </div>

      <audio src="source/wap.mp3" itemType='mp3' autoPlay loop></audio> 
  </div>
  );
}

export default App;
function closeApp(): void {
  throw new Error('Function not implemented.');
}

