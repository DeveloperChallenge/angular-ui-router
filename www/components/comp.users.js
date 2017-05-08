angular.module("routerApp")
.component("users",{
    templateUrl: '../www/templates/users.html',
    controller: function($http){
        var self = this;
       self.userData='';
        this.api = "https://jsonplaceholder.typicode.com/users";
        $http({
            method: 'GET',
            url: this.api,
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            }
        }).then(function(res){
            self.userData = res.data;
            // console.log(self.userData);
            self.company = "Drivio";
        });
    },
    bindings: {
        userData : '<'
    }
})

