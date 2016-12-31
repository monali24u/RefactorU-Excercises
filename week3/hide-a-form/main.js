
  angular.module("app", [])
        .controller("formControl", formControlFun);

  formControlFun.$inject = ['$scope'];

  function formControlFun($scope){

    $scope.changeText = 'Show Form';
    $scope.show1 = false;
    $scope.insert = function(){
      if($scope.show1 == true){
        $scope.show1 = false;
        $scope.changeText = 'Show Form';
      }
      else{
        $scope.show1 = true;
        $scope.changeText = 'Hide Form'
      }
    }

    $scope.user = 'Monali Patil';
    $scope.bio = 'Full stack web developer and Software engineer.I am currently seeking a challenging and fun software development opportunity.I have a bachelors degree in computer science.'
    $scope.book = 'Who moved my cheese?, Midnight to millennium, The monk who sold his ferrari';
    $scope.jsl = 'Bootstrap, angularJS, nodeJS, expressJS, Ajax';

    $scope.updateData = function(){
        $scope.user = $scope.user2;
        $scope.bio = $scope.bio2;
        $scope.book = $scope.book2;
        $scope.jsl = $scope.jsl2;
    }

  }
