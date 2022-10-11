const {Schema, model} = require('mongoose');

const goalSchema = new Schema({
    _id: String,
    title: {type : String, required:true},
    description: {type : String, required:true},
    achieved_date: Date,
    requirements:String
  }
  , { _id: true , timestamps:true}
  );

module.exports = model('goal', goalSchema);

