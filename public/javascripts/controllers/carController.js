app.controller('carController',['$scope','$resource',function($scope ,$resource){
  var Carlog = $resource('/api/Carlog');
  $scope.message = "Car Setup Page";

  CarLog.query(function(results){
    $scope.carlog = results;
  });
  $scope.carlog =[]

  var carlog = new CarLog();
  carlog.make = $scope.carMake;
  carlog.model = $scope.carModel;
  carlog.year = $sope.carYear;
  carlog.startMilage = $scope.openMilage
  mongoose.connect('mongodb://localhost:27017/logFulel/'$scope.carModel);
}])
