/*globals angular*/
"use strict";

angular.module( "app.controllers", [ ] )
    .controller( "ChallengeController", function( $scope, $location, $routeParams, $http) {

        $scope.fetchChallenges = function() {
            $http.get('challenge').success(function(challenges){
                $scope.results = challenges;
            });
        };
        console.log("here");
        $scope.fetchChallenges();

} );
