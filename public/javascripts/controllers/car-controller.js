var CarLog = require('../models/car-model');

module.exports.create = function(req , res){
  var carlog = new CarLog(req.body);
  carlog.save(function(err , results){
    res.json(results);

  });
  console.log(req.body);
}
module.exports.list = function(req , res){
  carlog.find({},function(err , results){
    res.json(results);
  })


};
