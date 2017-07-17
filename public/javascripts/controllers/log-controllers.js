var FuelLog = require('../models/fuel-log');

module.exports.create = function(req,res){
  var fuellogs = new FuelLog(req.body);
  fuellogs.save(function(err, result){
    res.json(result);
  });
  console.log(req.body);
}
module.exports.list = function (req , res){
  fuellogs.find({}, function(err,results){
    res.json(results);
  });
}
