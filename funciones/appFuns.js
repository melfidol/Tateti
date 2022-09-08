
var goalsList = ["Ganar una partida", "Ganar 5 partidas", "Empatar una partida", "Terminar el juego"].map((element, index) => {
    return {
      title: "Objetivo " + (index + 1),
      description: "Para completar este objetivo debes: " + element,
      date: new Date(),
      isFinished: index % 3 == 0
    }
  })
  
  const newGoalForm = document.getElementById("newGoalForm");
  const goalsListUI = document.getElementById("goalsListUI");
  
  goalsListUI.innerHTML = goalsList.map((goal, index) => {
    return goalToHTML(goal, index);
  })
  
  newGoalForm.addEventListener("submit", e => {
    e.preventDefault();
    // console.log(e)
  
    let title = document.getElementById("title");
    let description = document.getElementById("description");
  
    let newGoal = {
      title: title.value,
      description: description.value,
      date: new Date(),
      isFinished: false
    }
  
    goalsList.push(newGoal);
    // console.log(goalsList);
  
    renderGoals();
  })
  
  
  function goalToHTML(goal, index) {
    return `
      <li id="goal${index}" class="goal">
        <input onClick="checkGoal(${index})" type="checkbox" name="" id="" ${goal.isFinished ? "checked" : ""} >
        <div class="text">
          <h3>${goal.title}</h3>
          <p>${goal.description}</p>
        </div>
        <i class="fa-solid fa-trash" onClick="deleteGoal(${index})></i>
      </li>
    `
  }
  
  function checkGoal(numberGoal) {
    goalsList[numberGoal].isFinished = !goalsList[numberGoal].isFinished
    renderGoals()
  }
  
  function deleteGoal(numberGoal) {
    goalsList = goalsList.filter((e, index) => index != numberGoal)
    renderGoals()
  }
  
  function renderGoals() {
    goalsListUI.innerHTML = goalsList.map((goal, index) => {
      return goalToHTML(goal, index);
    })
  }