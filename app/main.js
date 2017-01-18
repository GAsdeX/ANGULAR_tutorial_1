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
          // console.log(heroesArr[i]);
        }
      }
      // console.log(heroesArr);
      return heroesArr;
    }
    console.log($scope.heroes);

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

    $scope.goBack = function() {
      if ($scope.currentWindow == 1){$scope.showMain()}
      if ($scope.currentWindow == 2){$scope.showHeroes()}
    }

    $scope.addHero = function() {
      $scope.heroes.push({name:$scope.newHero,id: ($scope.heroes.length+1)})
      console.log($scope.heroes[$scope.heroes.length]);
    }

    $scope.removeHero = function(x) {
      console.log(x);
      // $scope.heroes.splice(x,1);
      console.log($scope.heroes.length - $scope.heroes[x].id);
      $scope.heroes.splice(x,1);
      var counter = 0;
      for (x;$scope.heroes.length - $scope.heroes[x].id + 2; x++) {
        $scope.heroes[x].id = $scope.heroes[x].id - 1;
        counter++;
      }
      $scope.printHeroes();
      console.log($scope.printHeroes());
    };



    // console.log($scope.nameTossearch);

});
