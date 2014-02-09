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
    })
    .controller( "MapController", function( $scope, $location, $routeParams, $http) {
    	$scope.map = {
    			center: {
    				latitude: 45,
    				longitude: -73
    			},
    			zoom: 8
    		};
        var onMarkerClicked = function (marker) {
            marker.showWindow = true;
        };

        angular.extend($scope, {
            map: {
                version: "unknown",
                center: {
                    latitude: 45,
                    longitude: -73
                },
                options: {
                    streetViewControl: false,
                    panControl: false,
                    maxZoom:20,
                    minZoom:3
                },
                zoom: 3,
                dragging: false,
                bounds: {},
                markers: [
                    {
                        latitude: 45,
                        longitude: -74,
                        showWindow: false,
                        title: 'Marker 2'
                    },
                    {
                        latitude: 15,
                        longitude: 30,
                        showWindow: false,
                        title: 'Marker 2'
                    },
                    {
                        icon: 'plane.png',
                        latitude: 37,
                        longitude: -122,
                        showWindow: false,
                        title: 'Plane'
                    }
                ],
                events: {
                    tilesloaded: function (map, eventName, originalEventArgs) {
                    },
                    click: function (mapModel, eventName, originalEventArgs) {
                        // 'this' is the directive's scope
                        $log.log("user defined event: " + eventName, mapModel, originalEventArgs);

                        var e = originalEventArgs[0];

                        if (!$scope.map.clickedMarker) {
                            $scope.map.clickedMarker = {
                                title: 'You clicked here',
                                latitude: e.latLng.lat(),
                                longitude: e.latLng.lng()
                            };
                        }
                        else {
                            $scope.map.clickedMarker.latitude = e.latLng.lat();
                            $scope.map.clickedMarker.longitude = e.latLng.lng();
                        }

                        $scope.$apply();
                    },
                    dragend: function () {
                        self = this;
                        $timeout(function () {
                            modified = _.map($scope.map.mexiMarkers, function (marker) {
                                return {
                                    latitude: marker.latitude + rndAddToLatLon(),
                                    longitude: marker.longitude + rndAddToLatLon()
                                };
                            });
                            $scope.map.mexiMarkers = modified;
                        });
                    }
                },
                infoWindow: {
                    coords: {
                        latitude: 36.270850,
                        longitude: -44.296875
                    },
                    options:{
                        disableAutoPan:true
                    },
                    show: false
                },
                templatedInfoWindow: {
                    coords: {
                        latitude: 48.654686,
                        longitude: -75.937500
                    },
                    options:{
                        disableAutoPan:true
                    },
                    show: true,
                    templateUrl: 'templates/info.html',
                    templateParameter: {
                        message: 'passed in from the opener'
                    }
                },
                polylines: [
                    {
                        path: [
                            {
                                latitude: 45,
                                longitude: -74
                            },
                            {
                                latitude: 30,
                                longitude: -89
                            },
                            {
                                latitude: 37,
                                longitude: -122
                            },
                            {
                                latitude: 60,
                                longitude: -95
                            }
                        ],
                        stroke: {
                            color: '#6060FB',
                            weight: 3
                        },
                        editable: true,
                        draggable: false,
                        geodesic: false,
                        visible: true
                    },
                    {
                        path: [
                            {
                                latitude: 47,
                                longitude: -74
                            },
                            {
                                latitude: 32,
                                longitude: -89
                            },
                            {
                                latitude: 39,
                                longitude: -122
                            },
                            {
                                latitude: 62,
                                longitude: -95
                            }
                        ],
                        stroke: {
                            color: '#6060FB',
                            weight: 3
                        },
                        editable: true,
                        draggable: true,
                        geodesic: true,
                        visible: true
                    }
                ]
            },
            toggleColor: function (color) {
                return color == 'red' ? '#6060FB' : 'red';
            }

        });

        _.each($scope.map.markers, function (marker) {
            marker.closeClick = function () {
                marker.showWindow = false;
                $scope.$apply();
            };
            marker.onClicked = function () {
                onMarkerClicked(marker);
            };
        });
    });
