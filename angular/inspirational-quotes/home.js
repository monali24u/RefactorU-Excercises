
var app = angular.module('app', [])
app.controller('myController', quotesFun)

quotesFun.$inject = ['$scope'];

function quotesFun($scope){
  $scope.quotesArry = [
		{
	    author: 'Robin Sharma',
	    quote: "Life is all about choices. One's destiny unfolds according to the choices one makes.",
	    rating: 3
	  },
		{
			author: 'Mahatma Gandhi',
			quote: "You must be the change you wish to see in the world.",
			rating: 5
		},
	  {
	    author: 'Robin Sharma',
	    quote: 'Victims make excuses. Leaders deliver results.',
	    rating: 3
	  },
	  {
	    author: 'Rob Siltanen',
	    quote: "People who are crazy enough to think they can change the world, are the ones who do.",
	    rating: 4
	  },
	  {
	    author: 'Jim Rohn',
	    quote: "Either you run the day, or the day runs you.",
	    rating: 4
	  },
		{
			author: 'Robin Sharma',
			quote: "Knowing what to do and not doing it is the same as not knowing what to do.",
			rating: 2
		}

	];
 	$scope.master = {};
	$scope.update = function(user){
				user["rating"] = 3;
        $scope.master = angular.copy(user);
				$scope.quotesArry.push($scope.master);
				console.log($scope.quotesArry);
  };

}
