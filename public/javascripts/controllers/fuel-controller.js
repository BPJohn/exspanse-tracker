app.controller('fuelController', ['$scope', '$resource', function($scope, $resource) {
  var FuelLog = $resource('/api/FuelLog');
  $scope.message = "Welcome to the Fuel Log Page";
  $scope.startingOdomiter = 56324;
  console.log("Inside fuel controller");

  FuelLog.query(function(results){
    $scope.fulelogs = results;
  })
  $scope.fuellogs = []
  $scope.logFuel = function() {


    var fuellogs = new FuelLog();
    fuellogs.created_date = $scope.logDate;
    fuellogs.odomiter = $scope.currentOdomiter;
    fuellogs.gallons = $scope.qtyGallons;
    fuellogs.cost = $scope.fuelCost;

    fuellogs.$save(function(result) {
      $scope.fuellogs.push(result);
        //  {odomiter:$scope.currentOdomiter,
        //  gallons:$scope.qtyGallons,
        //  cost:$scope.fuelCost}

      $scope.currentOdomiter = "";
      $scope.qtyGallons = "";
      $scope.fuelCost = "";


    });





    // $scope.fuellog.push({odomiter:$scope.currentOdomiter,
    //   gallons:$scope.qtyGallons,
    //   cost:$scope.fuelCost});


  }


}]);
