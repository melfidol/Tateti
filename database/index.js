const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/jueves')
.then((result) => {
console.log("Base de datos conectada")
}).catch((error) => {
    console.log("Error en la conexion", error)
})

const goalSchema = new mongoose.Schema({
    title: String,
    description: String,
    date: Date,
    isFinished: Boolean
  });

const Goal = mongoose.model('goal', goalSchema);

let goal1 = new Goal({ 
    title: 'Acaba con la homofobia',
    description: 'ayuda',
    date: new Date(),
    isFinished:false
});

goal1.save()