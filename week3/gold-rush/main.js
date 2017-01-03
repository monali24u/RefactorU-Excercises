
var app = angular.module('goldRushApp', [ ]);
app.controller('goldCntl', goldCntlFun);

goldCntlFun.$inject = ['$scope'];

function goldCntlFun($scope){

  // $scope.div = document.createElement("div");
  // angular.element(document.getElementsByTagName('body')).append($scope.div);
  // var myEl = angular.element(document.getElementsByTagName('div'));
  // myEl.addClass('alpha');

  $scope.coordinateArry = [ ];
  
  $scope.getCoOrdinates = function($event){
    var Obj = { };
    Obj.x = $event.pageX;
    Obj.y = $event.pageY;
    $scope.coordinateArry.push(Obj);
    console.log($event.pageX , $event.pageY);
  }
}
