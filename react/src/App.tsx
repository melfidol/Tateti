import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Goal from './components/Goal/goal_expanded';

import Titlebar from './components/Titlebar';
import GoalsList from './views/GoalsList/goals_list';
import Index from './views/Index/inicio';
import Tateti from './views/Tateti/Tateti';

function App() {
  return (
    <BrowserRouter>
      <div className='mainApp'>
      <Titlebar/>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/tateti" element={<Tateti />} />
          <Route path='/goals' element={<GoalsList/>}/>
          
        </Routes>

      </div>

    </BrowserRouter>
  );
}

export default App;



