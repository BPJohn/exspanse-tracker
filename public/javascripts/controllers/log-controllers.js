var FuelLog = require('../models/fuel-log');

module.exports.create = function(req,res){
  var fuellog = new FuelLog(req.body);
  fuellog.save(function(err, result){
    res.json(result);
  });
  console.log(req.body);
}
module.exports.list = function (req , res){
  FuleLog.find({}, function(err,results){
    res.json(results);
  });
}
