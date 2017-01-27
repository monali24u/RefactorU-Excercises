var angularApp = angular.module('Magellan', []);
angularApp.controller('mController', mCtrlFunction);

mCtrlFunction.$inject = ['$scope', '$http'];

function mCtrlFunction($scope, $http) {
    $scope.contentGetter = function (place) {
        //  console.log(place)
        $http.get("http://localhost:8080/destination/" + place)
            .then(function (res) {
                $scope.mycontent = res.data;
                // console.log(res.data);
            });
    }
    $scope.contentGetter('');
}
