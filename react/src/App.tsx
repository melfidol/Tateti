import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'

import Titlebar from './components/Titlebar'
import GoalModel from './models/goalModel'
import { Backroom1 } from './views/Backroom1/Index'
import GoalsList from './views/GoalsList/goals_list'
import Index from './views/Index/inicio'
import Tateti from './views/Tateti/Tateti'

const ipcRenderer = window.require("electron").ipcRenderer

function App() {

const [objetivos, setObjetivos] = useState<GoalModel[]>([])
ipcRenderer.on('goal-found', (e: any, goal: GoalModel[]) => {
  setObjetivos(goal)
})
  return (
    <BrowserRouter>
      <div className='mainApp'>
      <Titlebar/>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/tateti" element={<Tateti />} />
          <Route path='/goals' element={<GoalsList/>}/>
          <Route path='/backroom1' element={<Backroom1/>}/>
        </Routes>
      </div>

    </BrowserRouter>
  );
}

export default App;



