var mongoose = require('mongoose');


module.exports = mongoose.model('MpgLog',{
  prevOdomiter:{type:Number },odomiterCur:{Number},preGal:{Number},MPG:{Number}
})
