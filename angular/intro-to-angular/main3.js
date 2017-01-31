angular.module("myapp", [])
       .controller("mainController", mainControllerFun);

mainControllerFun.$inject = ['$scope'];

function mainControllerFun($scope){

  $scope.show = false;
  $scope.clicked = function(){
    $scope.show = true;

    $scope.close = function(){
      $scope.show = false;
    }
  }

}
