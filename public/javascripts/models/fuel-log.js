var mongoose = require('mongoose');

module.exports = mongoose.model('FuelLog',{
  created_date:{type:Date,default:Date.now},
  odomiter:{type:Number ,required: true, minlength : 3},
  gallons:{type:Number,required:true, minlength: 1},
  cost:{type:Number,required:true,minlength:3}


});
