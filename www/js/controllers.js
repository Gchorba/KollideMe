angular.module('directory.controllers', [])

    .controller('EmployeeListCtrl', function ($scope, Employees, MyEvents) {

        $scope.searchKey = "";

        $scope.clearSearch = function () {
            $scope.searchKey = "";
            $scope.employees = Employees.query();
        }

        $scope.search = function () {
            $scope.employees = Employees.query({name: $scope.searchKey});
        }

        $scope.employees = Employees.query();
		$scope.meIn = function(employee){
					console.log(employee)
					for(i=0;i<ev.length;i++){
						if(ev[i].firstname == employee.firstname){ return true; }
					}
					return false;
				}

        $scope.myEvents = MyEvents.query();
    })

    .controller('EmployeeDetailCtrl', function($scope, $stateParams, Employees, MyEvents) {
        console.log('details');
        $scope.employee = Employees.get({employeeId: $stateParams.employeeId});
    })

    .controller('EmployeeReportsCtrl', function ($scope, $stateParams, Employees, MyEvents) {
        console.log('reports');
        $scope.employee = Employees.get({employeeId: $stateParams.employeeId, data: 'reports'});
    })

    .controller('NewEventCtrl', function ($scope, $stateParams, Employees, MyEvents) {
        console.log('newEvent');
        $scope.message = {
			'name' : '',
			'email' : '',
			'type' : '',
			'address' : '',
			'date' : '',
			'time' : '',
			'phone' : ''
		};
	});
