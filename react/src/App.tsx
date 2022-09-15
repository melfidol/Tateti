import { Login } from '@mui/icons-material';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Titlebar from './components/Titlebar';
import Index from './views/Index/inicio';
const ipcRenderer = window.require("electron").ipcRenderer

function App() {
  return (
  <div className='mainApp'> 
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>

    

  <Titlebar/>
  <Index/>  
  </div>
    
  );
}

export default App;


