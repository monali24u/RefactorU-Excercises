
var app = angular.module('slider', ['ui.bootstrap']);
       app.controller('sliderCntl', sliderCntlFun);

sliderCntlFun.$inject = ['$scope'];

function sliderCntlFun($scope){

    $scope.myInterval = 6000;
    $scope.active = 0;
    $scope.slides = [
      {
        image:'cherry-blossom-tree-wallpaper.jpg'
      },
      {
        image: 'anxIWuq.jpg'
      },
      {
        image: 'cherry_blossom_trees-wide.jpg'
      },
      {
        image: 'white-flowers.jpg'
      },
      {
        image: 'Bunga-Tulip.jpg'
      },
      {
        image: 'nhsZhkT.jpg'
      }];
}
