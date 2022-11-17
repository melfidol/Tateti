const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/goals')
.then(db => {
console.log("Base de datos conectada")
}).catch((error) => {
    console.log("Error en la conexion", error)
})

const Goal = require('./models/goal_model');



const ids = [];
for (let index = 0; index < 20; index++) {
  ids.push(new mongoose.Types.ObjectId())
}
Goal.count().then(r=>{
  if (r==0){

const goals = [
  new Goal({ 
    _id:ids[0],
    title: 'Welcome Noobie',
    description: 'Completa una partida de tateti',
    achieved_date: null,
    img_src:'http://localhost:3000/source/goals_img/getting_started.png',
    requirements: 'none'
  }),
  new Goal({
    _id:ids[1],
    title: 'U served kween',
    description: 'Completa 3 partidas de tateti',
    achieved_date: null,
    img_src:'http://localhost:3000/source/goals_img/tateti.jpg',
    requirements: ids[0]}),
  new Goal({
    _id:ids[2],
    title: 'Saint Jesus',
    description: 'Gana una partida como cruz',
    achieved_date: null,
    img_src:'http://localhost:3000/source/goals_img/cross.png',
    requirements: ids[1]}),
  new Goal({
    _id:ids[3],
    title:'Running in circles',
    description:'Gana una partida como círculo',
    achieved_date:null,
    img_src:'http://localhost:3000/source/goals_img/circle.png',
    requirements:ids[2]}),
  new Goal({
    _id:ids[4],
    title:'No way out',
    description:'Enter a secret level',
    achieved_date:null,
    img_src:'http://localhost:3000/source/goals_img/scape_room.jpg',
    requirements:'none'}),
    new Goal({
      _id:ids[5],
      title:'Testing',
      description:'Enter a secret level',
      achieved_date:null,
      img_src:'http://localhost:3000/source/among2.jpg',
      requirements:ids[2]})
]
goals.forEach(goal=>goal.save())
  }
})

function CreateGoal(goal) {
  return new Promise((resolve, reject) => {
    let goalx = new Goal({
      _id: new mongoose.Types.ObjectId(),
      title: goal.title,
      description: goal.description,
      achieved_date: Date,
      img_src:goal.img_src,
    })

    goalx.save().then(r => {
      console.log(goalx.title + " saved.");
      resolve(goalx)
    }).catch(error => {
      reject(error)
    })
  })
}

function UpdateGoal(goal_id, goal){
  Goal.findByIdAndUpdate(goal_id, goal, {new: true},
    (err, goal) => {
        if (err) return res.status(500).send(err)
        return res.send(goal)})
}

function CompletarObjetivo(goal_id){
  return  Goal.findByIdAndUpdate(goal_id, {$set: {achieved_date: new Date()}}, {new: true})

}


module.exports = {
    GoalsFindOne: (title) => Goal.findOne({title: title}),
    GoalsFind: async () => await Goal.find(),
    GoalsCreate: (goal) => CreateGoal(goal),
    CreateGoals: (goal) => Goal.create(goal),
    GoalsUpdate: (id, goal) => UpdateGoal(id, goal),
    CompletarObjetivo: (id) => CompletarObjetivo(id),
    GoalsDelete: (id) => Goal.collection.deleteOne({ _id: id })
  }
