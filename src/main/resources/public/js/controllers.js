/*globals angular*/
"use strict";

angular.module( "app.controllers", [ ] )
    .controller( "ChallengeController", function( $scope, $location, $routeParams, $http, $modal) {

        $scope.fetchChallenges = function() {
            $http.get('challenge').success(function(challenges){
                $scope.results = challenges;
            });
        };

        console.log("feching challenges");
        $scope.fetchChallenges();

        $scope.open = function (modalName) {
            var modalInstance = $modal.open({
                templateUrl: 'partials/createChallenge.html',
                controller: 'CreateChallengeController'
//                resolve: {
//                    'items': function() { return $scope.items; }
//                }
            });
            console.log('modal opened');
            modalInstance.result.then(function (response) {
//                $scope.selected = response;
                console.log(response);
            }, function () {
                console.log('Modal dismissed at: ' + new Date());
            });
        };
    })
    .controller( "CreateChallengeController", function( $scope, $location, $routeParams, $http, $modalInstance) {

        $scope.createChallenge = function(description) {
            $http.post('challenge',{'description':description}).success(function(id){
                console.log("id="+id);
                $modalInstance.close(id);
            });
        };

        $scope.cancel = function(){
            $modalInstance.dismiss('cancel');

        }
        console.log("create challenges");
//        $scope.fetchChallenges();
    })
;
