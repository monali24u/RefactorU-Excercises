
angular.module("myapp", [])
       .controller("mainController", mainControllerFun);

mainControllerFun.$inject = ['$scope'];

function mainControllerFun($scope){

    $scope.changeGreeting = function(){
      console.log("Hello There, How are you?");
    }

    $scope.changeGreeting2 = function(){
      $scope.greeting = ", How do you do? ";
    }

    $scope.showList = function(){
      $scope.heroes = ['Spandex Man', 'Quailman', 'Chicken Man', 'The Tick'];
    }

}
