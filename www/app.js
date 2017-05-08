angular.module("routerApp",['ui.router'])


.config(function($stateProvider,$urlRouterProvider){
    $urlRouterProvider.otherwise('/home');
    $stateProvider.state('home',{
        url:'/home',
        template:'<home></home>'
    }).state('about',{
        url:'/about',
        template:'<about></about>'
    }).state('users',{
        url:'/users',
        template:'<users></users>'
    }).state('profile',{
        url:'/profile',
        template:'<profile></profile>'
    }).state('contact',{
        url:'/contact',
        template:'<contact>'
    })
})

angular.element(function() {
    angular.bootstrap(document, ['routerApp']);
});

    
