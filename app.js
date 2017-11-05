var routerApp = angular.module('routerApp', ['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'home.html'
        })  
        .state('address', {
            url: '/address',
            templateUrl: 'address.html',
            controller: 'addressController'
        });

});


routerApp.controller('addressController', function($scope) {
    
        $scope.addresses = [
            {
                street: 'Macallan 12',
                number: 380015,
                city: "Ahmedabad",
                state: "Gujrat",
                country: "India",
            }
        ];


        $scope.submitAddress = function(address) {
          $scope.addresses.push(address);
        };

        $scope.removeAddress = function(idx){
            var adds = [];
            $scope.addresses.forEach(function (t, i) {
               if(i != idx)
                   adds.push(t);
            });

            $scope.addresses = adds;
        };
    
    });