console.log('good');
var search_app = angular.module("Heroes", []);
search_app.controller("search_controller", function($scope) {
    $scope.name = "John";
});

search_app.controller('main', function($scope, $log) {

    $scope.apperaMain = true;
    $scope.apperaHeroes = false;
    $scope.apperaHeroSettings = false;
    $scope.apperaDeshboard = false;
    $scope.heroes = [
      {
        name : "Grosha",
        id:1
      },{
        name : "ABBA",
        id:2
      },{
        name : "GAsdeX",
        id:3
      },{
        name : "Hooray",
        id:4
      },{
        name : "Grosha",
        id:5
      },{
        name : "ABBA",
        id:6
      },{
        name : "GAsdeX",
        id:7
      },{
        name : "Hooray",
        id:8
      },{
        name : "Hooray",
        id:9
      },{
        name : "Hooray",
        id:10
      }
    ]
    $scope.printHeroes = function(){
      var heroesArr =[]
      for (var i = 0; $scope.heroes[i]; i++){
        if (i<4){
          heroesArr.push($scope.heroes[i])
          console.log(heroesArr[i]);
        }
      }
      // console.log(heroesArr);
      return heroesArr;
    }
    $scope.heroes_4 = $scope.printHeroes()

    //displaying of forms

    $scope.showHeroes = function () {
      $scope.apperaMain = false;
      $scope.apperaHeroes = true;
      $scope.apperaHeroSettings = false;
      console.log('hhh');
    }

    $scope.showMain = function () {
      $scope.apperaMain = true;
      $scope.apperaHeroes = false;
      $scope.apperaHeroSettings = false;
    }

    $scope.clickCard = function(hero) {
      console.log(hero.id);
      $scope.apperaHeroSettings = true;
      $scope.apperaMain = false;
      $scope.apperaHeroes = false;
      $scope.hero = hero;
    }

    $scope.addHero = function() {
      $scope.heroes.push({name:$scope.newHero,id: ($scope.heroes.length+1)})
      console.log($scope.heroes[$scope.heroes.length]);
    }

    // console.log($scope.nameTossearch);
    
});
