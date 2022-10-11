import GoalModel from "../../models/goalModel";
import "./goal_minimized.css"
import 'gojs';


interface GoalParams {
    goal: GoalModel,
    index: number
  }

function GoalMinimized({ goal, index }: GoalParams){

    let goalsList: any[] = []

    function UnlockGoal(numberGoal : number){
        if(goalsList[numberGoal].requirements === null){
  
        }
      }
    
    
    return(
        <div className="goal_icon">
            <div className="tooltip">{goal.title}</div>
            <img src={goal.img_src} alt={goal.title}/>
        </div>
    )
}
export default GoalMinimized;