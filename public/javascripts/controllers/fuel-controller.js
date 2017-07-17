app.controller('fuelController', ['$scope', '$resource', function($scope, $resource) {
  var FuelLog = $resource('/api/fuellog');
  $scope.message = "Welcome to the Fuel Log Page";
  $scope.startingOdomiter = 56324;
  // console.log("Inside fuel controller");

  FuelLog.query(function(results) {
    $scope.fulelog = results;
  })
  $scope.fuellog = []


  $scope.logFuel = function() {


    var fuellog = new FuelLog();
    fuellog.created_date = $scope.logDate;
    fuellog.odomiter = $scope.currentOdomiter;
    fuellog.gallons = $scope.qtyGallons;
    fuellog.cost = $scope.fuelCost;

    fuellog.$save(function(result) {
      $scope.fuellog.push(result);
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
