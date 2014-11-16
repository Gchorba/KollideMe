myEvents = [
	{"id": 0, "firstName": "James", "lastName": "King", "reports": 4, "title": "President and CEO", "department": "Corporate", "cellPhone": "617-000-0001", "officePhone": "781-000-0001", "email": "jking@fakemail.com", "city": "Boston, MA", "pic": "http://media-cdn.tripadvisor.com/media/photo-t/02/a3/60/11/filename-bunker-jpg-thumbnail0.jpg", "twitterId": "@fakejking", "blog": "http://coenraets.org"},
    {"id": 1, "firstName": "Julie", "lastName": "Taylor", "managerId": 0, "managerName": "James King", "reports": 2, "title": "VP of Marketing", "department": "Marketing", "cellPhone": "617-000-0002", "officePhone": "781-000-0002", "email": "jtaylor@fakemail.com", "city": "Boston, MA", "pic": "http://media-cdn.tripadvisor.com/media/photo-t/04/b5/96/56/off-the-eaten-path-tours.jpg", "twitterId": "@fakejtaylor", "blog": "http://coenraets.org"}
];

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