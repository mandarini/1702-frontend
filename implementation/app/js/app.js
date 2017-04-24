'use strict';

var myApp = angular.module('myApp', [
    'ngRoute',
    'ui.router',
    'ngResource',
    'myApp.home'
]);

myApp.config(function($stateProvider, $urlRouterProvider, $sceDelegateProvider) {
    $urlRouterProvider.otherwise('/home');

    $sceDelegateProvider.resourceUrlWhitelist([
      // Allow same origin resource loads.
      'self',
      // Allow loading from our assets domain.  Notice the difference between * and **.
      'http://services.marinetraffic.com/api/**']);
});

myApp.controller('AppCtrl', function($scope, $log, $state, $rootScope, $location) {
    $scope.$state = $state;
    $scope.fullDate = "MMM dd, y 'at' HH:mm:ss";
    $scope.stamenTiles = new ol.layer.Tile({
        source: new ol.source.Stamen({
            layer: 'terrain'
        })
    });
});
