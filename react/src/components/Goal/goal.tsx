import { useEffect, useState } from "react"
import GoalModel from "../../models/goalModel"
import "../goal.module.css"
const ipcRenderer = window.require("electron").ipcRenderer

interface GoalParams {
    goal: GoalModel,
    index: number
  }
  
  // function Goal(props: GoalParams) {
  //   const goal = props.goal
  
  // function Goal(props: GoalParams) {
  //   const { goal } = props
  
  function Goal({ goal, index }: GoalParams) {
    const [enter, setEnter] = useState(false)
  
    let goalsList: any[] = []
  
    function checkGoal(numberGoal: number) {
      goalsList[numberGoal].isFinished = !goalsList[numberGoal].isFinished
      // renderGoals()
    }
  
    function deleteGoal() {
      ipcRenderer.send("delete-goal", goal._id)
    }
  
    useEffect(() => {
      setEnter(true)
  
      return () => {
        setEnter(false)
      }
    }, [])
  
    
    return (
        <li id={"goal" + index} className="goal">
          <input
            className="checkbox"
            onClick={e => checkGoal(index)}
            type="checkbox"
            name=""
            id=""
          
          />
          <div className="text">
            <h3>{goal.title}</h3>
            <p>{goal.description}</p>
          </div>
          <img
            alt="delete"
            src="/icons/delete.png"
            width="32px"
            height="32px"
            onClick={e => deleteGoal()}
          />
        </li>
    )
  }
  
  export default Goal;
 