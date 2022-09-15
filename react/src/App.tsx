import { Login } from '@mui/icons-material';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Titlebar from './components/Titlebar';
import Index from './views/Index/inicio';
import Jugar from './views/Index/jugar';

function App() {
  return (
    <BrowserRouter>
      <div className='mainApp'>



        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/rutajugar" element={<Jugar />} />
          
        </Routes>




        {/* <Titlebar /> */}
      </div>

    </BrowserRouter>
  );
}

export default App;


