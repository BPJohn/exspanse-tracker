 function fuelController($scope){
   $scope.message = "Welcome to the Fuel Log Page";
   $scope.startingOdomiter = 56324;
  console.log("Inside fuel controller");
$scope.fuelLog = [
  {odomiter:Number},
  {gallons:Number},
  {cost:Number}
]


$scope.logFuel = function(){
 $scope.fuelLog.push({odomiter:$scope.currentOdomiter},
   {gallons:$scope.qtyGallons},
   {cost:$scope.fuelCost});
 $scope.currentOdomiter = "";
 $scope.qtyGallons = "";
 $scope.fuelCost = "";

}

};
