/*global angular*/

"use strict";

var app = angular.module("app",[
    "ngRoute",
	"app.services",
	"app.controllers",
	"app.filters",
	"app.directives",
	"ui.bootstrap"
]);

app.config(['$routeProvider',function($routeProvider){
	$routeProvider
		.when("/",
			{
				controller: "ChallengeController",
				templateUrl: "partials/challenge.html"
			})
        .when("/x",
        {
            controller: "ChallengeController",
            templateUrl: "partials/challenge.html"
        })
		.when("/search/:zipcode/:place",
			{
				controller: "SearchCtrl",
				templateUrl: "partials/search.html"
			})
		.otherwise({ redirectTo: "/" });
}]);