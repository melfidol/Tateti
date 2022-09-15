import './App.css';
import Titlebar from './components/Titlebar';
import Index from './views/Index/inicio';
const ipcRenderer = window.require("electron").ipcRenderer

function App() {
  return (
  <div className='mainApp'> 
  <Titlebar/>
  <Index/>  
  </div>
    
  );
}

export default App;


