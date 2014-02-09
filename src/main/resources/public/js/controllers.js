/*globals angular*/
"use strict";

angular.module( "app.controllers", [ ] )
    .controller( "ChallengeController", function( $scope, $location, $routeParams, $http) {

        $scope.fetchChallenges = function() {
            $http.get('challenge').success(function(challenges){
                $scope.results = challenges;
            });
        };

        console.log("feching challenges");
        $scope.fetchChallenges();
    })
    .controller( "CreateChallengeController", function( $scope, $location, $routeParams, $http) {

        $scope.createChallenge = function(description) {
            $http.post('challenge',{'description':description}).success(function(id){
                console.log("id="+id);
            });
        };

        $scope.cancel = function(){
//            $modalInstance.dismiss('cancel');

        }
        console.log("create challenges");
//        $scope.fetchChallenges();
    })
;
