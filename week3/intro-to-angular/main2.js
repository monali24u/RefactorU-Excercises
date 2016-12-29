
angular.module("myapp", [])
       .controller("mainController", mainControllerFun);

mainControllerFun.$inject = ['$scope'];

function mainControllerFun($scope){

  $scope.headHover1 = function(){
    $scope.greeting = '!!!';
  }

  $scope.hoverOut1 = function(){
    $scope.greeting = '';
  }

  $scope.headHover2 = function(){
    $scope.greeting1 = '!!!';
  }

  $scope.hoverOut2 = function(){
    $scope.greeting1 = '';
  }

  $scope.show1 = true;
  $scope.clicked1 = function($event){
    if(!confirm("Do you want to open the URL")){
      $event.preventDefault();
      $scope.show1 = false;
    }
  }

  $scope.show2 = true;
  $scope.clicked2 = function($event){
    if(!confirm("Do you want to open the URL")){
      $event.preventDefault();
      $scope.show2 = false;
    }
  }

}
