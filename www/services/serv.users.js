angular.module('routerApp')

.service("usersService", function($http) {
    var getUsersImages = function() {
        this.api = "https://jsonplaceholder.typicode.com/";
        $http({
            method: 'GET',
            url: this.api + 'photos',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            }
        });

    }
});
