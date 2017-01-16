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

search_app.controller('main', function($scope, $log) {

    $scope.apperaMain = true;
    $scope.apperaHeroes = false;
    $scope.apperaDeshboard = false;

    $scope.heroes = [
      {
        name : "Grosha",
        id:"11"
      },{
        name : "ABBA",
        id:"12"
      },{
        name : "GAsdeX",
        id:"13"
      },{
        name : "Hooray",
        id:"14"
      },{
        name : "Grosha",
        id:"15"
      },{
        name : "ABBA",
        id:"16"
      },{
        name : "GAsdeX",
        id:"17"
      },{
        name : "Hooray",
        id:"18"
      },{
        name : "Hooray",
        id:"19"
      },{
        name : "Hooray",
        id:"20"
      }
    ]
    // console.log($scope.heroes[0]['id']);
    $scope.printHeroes = function(){
      var heroesArr =[]
      for (var i = 0; $scope.heroes[i]; i++){
        if (i<4){
          heroesArr.push($scope.heroes[i])
          console.log(heroesArr[i]);
        }
      }
      console.log(heroesArr);
      return heroesArr;
    }
    $scope.heroes_4 = $scope.printHeroes()
//displaying of forms

    $scope.showHeroes = function () {
      $scope.apperaMain = false;
      $scope.apperaHeroes = true;
      console.log('hhh');
    }
    $scope.showMain = function () {
      $scope.apperaMain = true;
      $scope.apperaHeroes = false;
      console.log('hhh');
    }

    $scope.clickCard = function () {
      $('ul li').click(function() {
        var target = $(this).attr('data-name');
      }
      console.log($('#hroes-cards li').attr('data-options'));
    }

});
