var CarLog = require('../models/car-model');

module.exports.create = function(req , res){
  var carlog = new CarLog(req.body);
  carlog.save(function(err , result){
    res.json(result);

  });
  console.log(req.body);
}
module.exports.list = function(req , res){
  CarLog.find({},function(err , results){
    res.json(results);
  })


};
