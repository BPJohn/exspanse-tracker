var FuelLog = require('../models/fuel-log');

module.exports.create = function(req,res){
  var fuellog = new FuelLog(req.body);
  fuellog.save();
  console.log(req.body);
}
