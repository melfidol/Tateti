import go from 'gojs';
import { useEffect, useState } from 'react';
import GoalModel from '../../models/goalModel';
import { ReactDiagram } from 'gojs-react';
import goalsStyle from "./goals_list.module.css"
const ipcRenderer = window.require("electron").ipcRenderer
function GoalsList(){
    
const [goalsList, setGoalsList] = useState<GoalModel[]>([])

  useEffect(() => {
    ipcRenderer.send("getGoals")
  }, [])

  ipcRenderer.on("goals", (e: any, goals: GoalModel[]) => {
    console.log(goals)
    setGoalsList(goals)
  })


function isUnlocked(goal:GoalModel){
  if(goal.requirements == 'none'){
    return true
  }else{
    const parent = goalsList.find(e => e._id === goal.requirements)
    if(parent?.achieved_date){
      return true
    }
  }
  return(false)
}

  function makeDiagram(){
    const $ = go.GraphObject.make;
  // set your license key here before creating the diagram: go.Diagram.licenseKey = "...";
  const diagram =
    $(go.Diagram,
      {
        allowSelect: false,
        model: new go.GraphLinksModel(
          {
            linkKeyProperty: 'key'  // IMPORTANT! must be defined for merges and data sync when using GraphLinksModel
          })
      });

  // define a simple Node template
  diagram.nodeTemplate =
    $(go.Node, 'Auto',  // the Shape will go around the TextBlock
      $(go.Shape, 'RoundedRectangle',
        { name: 'Shape', fill: 'white', strokeWidth: 0, stroke:"black", height:60, width:60 },
        // Shape.fill is bound to Node.data.color
        new go.Binding('fill', 'color')),
      $(go.Picture, {
          source:'', width:47, height:47, opacity:1
        }, new go.Binding('source', 'src'), new go.Binding('opacity', 'opacity'))
    );
    diagram.layout =
    $(go.TreeLayout,
      {
        angle:0,
        layerSpacing: 50,
        nodeSpacing:70
      })

      diagram.linkTemplate = 
      new go.Link(
        // default routing is go.Link.Normal
        // default corner is 0
        { routing: go.Link.Orthogonal, corner:0})
        // the link path, a Shape
        .add(new go.Shape({ strokeWidth: 3, stroke: "white" }))
        // if we wanted an arrowhead we would also add another Shape with toArrow defined:
        //.add(new go.Shape({  toArrow: "Standard", stroke: null  }))
    
  return diagram  
  };

  function setNodeDataArray(){
    let listElement = {};
    let resultList: {}[] = [];
    goalsList.forEach((goal) => {
      if(isUnlocked(goal)){
        if(goal.achieved_date){
          listElement = {key :goal._id, goal, src: goal.img_src, color:"#FEB703", opacity:1}
          resultList.push(listElement)
        }else{
          listElement = {key :goal._id, goal, src: goal.img_src}
          resultList.push(listElement)
        }
      }else{
        listElement = {key :goal._id, goal, src: goal.img_src, color:"#434343", opacity:0.35}
        resultList.push(listElement)}
      })
    return (resultList)
  }
  function setLinkDataArray(){
    let listElement = {};
    let resultList: {}[] = [];
    goalsList.forEach((goal) => {
      if(goal.requirements !== 'none'){
        listElement = {to :goal._id, goal, from: goal.requirements}
        resultList.push(listElement)
      }})
    return (resultList)
  }

  return (
    <div className={goalsStyle.main}>
      {/* //prolijito */}
      <h1 className={goalsStyle.title}>Objetivos</h1>
    <ReactDiagram
        initDiagram={makeDiagram}
        divClassName={goalsStyle['diagram-component']}
        nodeDataArray={setNodeDataArray()}
        linkDataArray={setLinkDataArray()}
      />
      
    </div>
  );}
    export default GoalsList 