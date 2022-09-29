import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Titlebar from './components/Titlebar';
import Index from './views/Index/inicio';
import Jugar from './views/Tateti/jugar';

function App() {
  return (
    <BrowserRouter>
      <div className='mainApp'>



        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/Tateti" element={<Jugar />} />
          
        </Routes>




        {/* <Titlebar /> */}
      </div>

    </BrowserRouter>
  );
}

export default App;


