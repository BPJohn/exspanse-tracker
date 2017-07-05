app.controller('fuelController',['$scope','$resource',function($scope,$resource){
    var FuelLog =$resource('/api/fuellog');
    $scope.message = "Welcome to the Fuel Log Page";
    $scope.startingOdomiter = 56324;
   console.log("Inside fuel controller");
 // $scope.fuelLog = [
 //   {odomiter:57986,
 //   gallons:16.456,
 //   cost:32.56}
 // ]


 $scope.logFuel = function(){


   var fuellog = new FuelLog();
   fuellog.odomiter = $scope.currentOdomiter;
   fuellog.gallons = $scope.qtyGallons;
   fuellog.cost = $scope.fuelCost;
   fuellog.$save();
   $scope.currentOdomiter = "";
   $scope.qtyGallons = "";
   $scope.fuelCost = "";





  // $scope.fuelLog.push({odomiter:$scope.currentOdomiter,
  //   gallons:$scope.qtyGallons,
  //   cost:$scope.fuelCost});


 }


}]);
