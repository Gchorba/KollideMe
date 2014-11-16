angular.module('directory.controllers', [])

    .controller('EmployeeListCtrl', function ($scope, Employees) {

        $scope.searchKey = "";

        $scope.clearSearch = function () {
            $scope.searchKey = "";
            $scope.employees = Employees.query();
        }

        $scope.search = function () {
            $scope.employees = Employees.query({name: $scope.searchKey});
            $scope.myEvents = MyEvents.query({name: $scope.searchKey});
        }

        $scope.employees = Employees.query();
        $scope.myEvents = MyEvents.query();
    })

    .controller('EmployeeDetailCtrl', function($scope, $stateParams, Employees) {
        console.log('details');
        $scope.employee = Employees.get({employeeId: $stateParams.employeeId});
    })

    .controller('EmployeeReportsCtrl', function ($scope, $stateParams, Employees) {
        console.log('reports');
        $scope.employee = Employees.get({employeeId: $stateParams.employeeId, data: 'reports'});
    })

    .controller('NewEventCtrl', function ($scope, $stateParams, Employees) {
        console.log('newEvent');
          $scope.message = {
    'name' : '',
    'email' : '',
    'type' : '',
    'address' : '',
    'date' : '',
    'time' : '',
    'phone' : ''
	});
      
});
