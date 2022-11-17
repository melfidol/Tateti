const mongoose = require('mongoose');
const {Schema, model} = require('mongoose');


const goalSchema = new mongoose.Schema({
  _id: String,
  title: {type : String, required:true},
  description: {type : String, required:true},
  achieved_date: Date,
  img_src:String,
  requirements:{type : String, required:true}
  }
  , { _id: true , timestamps:true}
  );


module.exports = model('Goal', goalSchema);

