app.controller('carController',['$scope','$resource',function($scope ,$resource){
  var Carlog = $resource('/api/CarLog');
  $scope.message = "Car Setup Page";

  // CarLog.query(function(results){
  //   $scope.carlog = results;
  // })
  $scope.carlogs =[]

  $scope.createCar = function(){

  var carlog = new CarLog();
  carlog.make = $scope.carMake;
  carlog.model = $scope.carModel;
  carlog.year = $scope.carYear;
  carlog.startMilage = $scope.openMilage
  // mongoose.connect('mongodb://localhost:27017/logFuel/' + $scope.carModel);
}
}])
