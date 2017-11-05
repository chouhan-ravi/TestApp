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
                id: new Date().getTime(),
                street: 'Macallan 12',
                number: 380015,
                city: "Ahmedabad",
                state: "Gujrat",
                country: "India",
            }
        ];

        $scope.address = { id: -1, street: "", number: "", city: "", state: "", country: ""};

        $scope.submitAddress = function(address) {
            var key = -1;
            if( address.id < 0 ) {
                address["id"] = new Date().getTime();
                $scope.addresses.push(angular.copy(address));
            } else if (address.id != -1) {
                angular.forEach($scope.addresses, function (ad, k) {
                    if(ad.id == address.id)
                        key = k;
                })

                if(key != -1)
                    $scope.addresses[key] = angular.copy(address);

            }

            $scope.address = { id: -1, street: "", number: "", city: "", state: "", country: ""};
        };

        $scope.editAddress = function (idx) {
            $scope.address = angular.copy($scope.addresses[idx]);
        }

        $scope.removeAddress = function(idx){
            var adds = [];
            $scope.addresses.forEach(function (t, i) {
               if(i != idx)
                   adds.push(t);
            });

            $scope.addresses = adds;
        };
    
    });