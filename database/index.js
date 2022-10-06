const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/goals')
.then((result) => {
console.log("Base de datos conectada")
}).catch((error) => {
    console.log("Error en la conexion", error)
})

const goalSchema = new mongoose.Schema({
    _id: String,
    title: String,
    description: String,
    date: Date
  }
  , { _id: true }
  );

const Goal = mongoose.model('goal', goalSchema);

let goal1 = new Goal({ 
    title: 'Gana una partida',
    description: 'Gana una partida de tateti contra la máquina',
    date: new Date()
});

goal1.save();

const goals = [
  new Goal(),
  new Goal()
]

module.exports = {
    GoalsFind: () => Goal.find(),
    GoalsDelete: (_id) => Goal.collection.deleteOne({ _id: _id })
  }