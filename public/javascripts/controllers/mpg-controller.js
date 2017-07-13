var MpgLog = require('..//models/mpg-log');

module.exports.create = function(req,res){
  var mpg = new MpgLog(req.body);
  mpg.save(function(err,results){
    res.json(result);
  });
  console.log(req.body);
}
module.exports.list = function(req , res){
  mpg.find({},function(err,results){
    res.json(results);
  })
}
