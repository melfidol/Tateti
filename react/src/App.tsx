import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Titlebar from './components/Titlebar';
import Index from './views/Index/inicio';
import Personaje from './views/Personaje/Personaje';
import Tateti from './views/Tateti/Tateti';

function App() {
  return (
    <BrowserRouter>
      <div className='mainApp'>
      <Titlebar/>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/tateti" element={<Tateti />} />
          <Route path="/personaje" element={<Personaje />} />
          
        </Routes>

      </div>

    </BrowserRouter>
  );
}

export default App;



