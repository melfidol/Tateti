import { Collapse } from '@mui/material';
import go from 'gojs';
import { useEffect, useState } from 'react';
import { TransitionGroup } from 'react-transition-group';
import Goal from '../../components/Goal/goal_expanded';
import GoalModel from '../../models/goalModel';
import { ReactDiagram } from 'gojs-react';
import "./goals_list.css"
const ipcRenderer = window.require("electron").ipcRenderer
function GoalsList(){
    
  // const [goalsList, setGoalsList] = useState<GoalModel[]>([])

  useEffect(() => {
    ipcRenderer.send("getGoals")
  }, [])

  // ipcRenderer.on("goals", (e: any, goals: GoalModel[]) => {
  //   console.log(goals)
  //   setGoalsList(goals)
  // })

  // {"key":1, "name":"Stella Payne Diaz", "title":"CEO", "pic":"1.jpg"},
  function makeDiagram(){
    const $ = go.GraphObject.make;
  // set your license key here before creating the diagram: go.Diagram.licenseKey = "...";
  const diagram =
    $(go.Diagram,
      {
        'undoManager.isEnabled': true,  // must be set to allow for model change listening
        // 'undoManager.maxHistoryLength': 0,  // uncomment disable undo/redo functionality
        'clickCreatingTool.archetypeNodeData': { text: 'new node', color: 'lightblue' },
        model: new go.GraphLinksModel(
          {
            linkKeyProperty: 'key'  // IMPORTANT! must be defined for merges and data sync when using GraphLinksModel
          })
      });

  // define a simple Node template
  diagram.nodeTemplate =
    $(go.Node, 'Auto',  // the Shape will go around the TextBlock
      new go.Binding('location', 'loc', go.Point.parse).makeTwoWay(go.Point.stringify),
      $(go.Shape, 'RoundedRectangle',
        { name: 'SHAPE', fill: 'white', strokeWidth: 0 },
        // Shape.fill is bound to Node.data.color
        new go.Binding('fill', 'color')),
      $(go.TextBlock,
        { margin: 8, editable: true },  // some room around the text
        new go.Binding('text').makeTwoWay()
      )
    );
    diagram.layout =
    $(go.TreeLayout,
      {
          layerSpacing: 20,
          nodeSpacing:100
      })
  return diagram  
  };

  return (
    <div>
      {/* //prolijito */}

      <h1>Objetivos</h1>
    <div>
    <ReactDiagram
        initDiagram={makeDiagram}
        divClassName='diagram-component'
        nodeDataArray={[
          { key: 0, text: 'Alpha', color: 'lightblue', loc: '0 0' },
          { key: 1, text: 'Beta', color: 'orange', loc: '150 0' },
          { key: 2, text: 'Gamma', color: 'lightgreen', loc: '0 150' },
          { key: 3, text: 'Delta', color: 'pink', loc: '150 150' }
        ]}
        linkDataArray={[
          { key: -1, from: 0, to: 1 },
          { key: -2, from: 0, to: 2 },
          { key: -3, from: 1, to: 1 },
          { key: -4, from: 2, to: 3 },
          { key: -5, from: 3, to: 0 }
        ]}
      />

    </div>
      
      {/* <ul>
        <TransitionGroup>
          {goalsList.map((item, index) =>
            <Collapse key={item._id}>
              <Goal goal={item} index={index} />
            </Collapse>
          )}
        </TransitionGroup>
      </ul> */}
    </div>
  );}
    export default GoalsList 