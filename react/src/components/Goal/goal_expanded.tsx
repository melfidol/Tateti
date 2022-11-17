import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import GoalModel from "../../models/goalModel"
import "./goal_expanded.css"
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
  
    let goalsList: any[] = []

    function UnlockGoal(numberGoal : number){
      if(goalsList[numberGoal].requirements === null){

      }
    }
  
    // function checkGoal(numberGoal: number) {
    //   if (goalsList[numberGoal].achieved_date){
        
    //   }
    // function renderGoals(){
    //   const goalsList = ipcRenderer.send("getGoals")
    //   console.log(typeof(goalsList))
    // }
    // }
  
    // function deleteGoal() {
    //   ipcRenderer.send("delete-goal", goal._id)}
    
    return (
      <div>
      <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={goal.img_src}
          alt="goal image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {goal.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {goal.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      </Card>
      </div>
        
    )
  }
  
  export default Goal;
 