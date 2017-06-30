 function fuelController($scope){
   $scope.message = "Welcome to the Fuel Log Page";
   $scope.startingOdomiter = 56324;
  console.log("Inside fuel controller");
$scope.fuelLog = [
  {odomiter:57986,
  gallons:16.456,
  cost:32.56}
]


$scope.logFuel = function(){
  console.log ("insde logFuel  "+ $scope.fuelLog);
 $scope.fuelLog.push({odomiter:$scope.currentOdomiter,
   gallons:$scope.qtyGallons,
   cost:$scope.fuelCost});
 $scope.currentOdomiter = "";
 $scope.qtyGallons = "";
 $scope.fuelCost = "";

}

};
