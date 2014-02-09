/*global angular*/

"use strict";

var app = angular.module("app",[
    "ngRoute",
	"app.services",
	"app.controllers",
	"app.filters",
	"app.directives",
	"ui.bootstrap",
	"google-maps"
]);

app.config(['$routeProvider',function($routeProvider){
	$routeProvider
		.when("/",
			{
				controller: "ChallengeController",
				templateUrl: "partials/challenges.html"
			})
        .when("/createChallenge",
        {
            controller: "CreateChallengeController",
            templateUrl: "partials/createChallenge.html"
        })
        .when("/map",
        {
            controller: "MapController",
            templateUrl: "partials/map.html"
        })        
		.when("/search/:zipcode/:place",
			{
				controller: "SearchCtrl",
				templateUrl: "partials/search.html"
			})
		.otherwise({ redirectTo: "/" });
}]);