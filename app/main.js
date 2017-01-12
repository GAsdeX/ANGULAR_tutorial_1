console.log('good');
var search_app = angular.module("Heroes", []);
search_app.controller("search_controller", function($scope) {
    $scope.name = "John";
});

search_app.controller('myCtrl', function($scope) {
    $scope.showMe = false;
    console.log('hooray');
    $scope.myFunc = function() {
        $scope.showMe = !$scope.showMe;
    }
});

search_app.controller('heroes_arr', function($scope, $log) {
    $scope.heroes = [
      {
        name : "Grosha"
      },{
        name : "ABBA"
      },{
        name : "GAsdeX"
      },{
        name : "Hooray"
      }
    ]
});


console.log('sdfsvcscdfvcdfvfxd');
