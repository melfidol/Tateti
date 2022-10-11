const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/goals')
.then(db => {
console.log("Base de datos conectada")
}).catch((error) => {
    console.log("Error en la conexion", error)
})

const goalSchema = new mongoose.Schema({
  _id: String,
  title: {type : String, required:true},
  description: {type : String, required:true},
  achieved_date: Date,
  img_src:String,
  requirements:String
  }
  , { _id: true , timestamps:true}
  );


const Goal = mongoose.model('goal', goalSchema);
const ids = [new mongoose.Types.ObjectId(),new mongoose.Types.ObjectId(),new mongoose.Types.ObjectId(),new mongoose.Types.ObjectId(),new mongoose.Types.ObjectId(),new mongoose.Types.ObjectId(),new mongoose.Types.ObjectId(),new mongoose.Types.ObjectId(),new mongoose.Types.ObjectId(),new mongoose.Types.ObjectId(),new mongoose.Types.ObjectId(),new mongoose.Types.ObjectId(),new mongoose.Types.ObjectId(),new mongoose.Types.ObjectId(),new mongoose.Types.ObjectId(),new mongoose.Types.ObjectId(),new mongoose.Types.ObjectId(),new mongoose.Types.ObjectId(),new mongoose.Types.ObjectId(),new mongoose.Types.ObjectId()]
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
    requirements:null})
]
goals.forEach(goal=>goal.save())
  }
})

module.exports = {
    GoalsFindOne: (title) => Goal.find({title: title}),
    GoalsFind: async () => await Goal.find(),
    GoalsDelete: (id) => Goal.collection.deleteOne({ _id: id })
  }
