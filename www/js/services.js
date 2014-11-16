angular.module('directory.services', ['ngResource'])

    .factory('Employees', function ($resource) {
        return $resource('/events/:employeeId/:data');
    })

    .factory('MyEvents', function ($resource) {
        return $resource('/myEvents');
    });