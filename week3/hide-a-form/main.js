
  angular.module("app", [])
        .controller("formControl", formControlFun);

  formControlFun.$inject = ['$scope'];

  function formControlFun($scope){

    $scope.show1 = false;
    $scope.insert = function(){
      if($scope.show1 == true){
        $scope.show1 = false;
      }
      else{
        $scope.show1 = true;
      }
    }

    $scope.updateData = function(){

    }


  }
