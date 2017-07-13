var mongoose = require('mongoose');

module.exports = mongoose.model('Carlog',{
  make:{type:String},model:{type:String},year:{type:Number},startMilage{type:Number}
})
