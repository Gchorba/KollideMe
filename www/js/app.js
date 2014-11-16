angular.module('directory', ['ionic', 'directory.controllers', 'directory.services'])

    .run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }
        });
    })

    .config(function ($stateProvider, $urlRouterProvider) {

        $stateProvider

            .state('search', {
                url: '/search',
                templateUrl: 'templates/event-list.html',
                controller: 'EmployeeListCtrl'
            })

            .state('employee', {
                url: '/events/:employeeId',
                templateUrl: 'templates/event-detail.html',
                controller: 'EmployeeDetailCtrl'
            })

            .state('reports', {
                url: '/events/:employeeId/reports',
                templateUrl: 'templates/event-reports.html',
                controller: 'EmployeeReportsCtrl'
            })
			
            .state('newEvent', {
                url: '/newEvent',
                templateUrl: 'templates/event-new.html',
                controller: 'NewEventCtrl'
            });

        $urlRouterProvider.otherwise('/search');
    });