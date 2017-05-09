angular.module("routerApp",['ui.router'])


.config(function($stateProvider,$urlRouterProvider){
    $urlRouterProvider.otherwise('/home');
    $stateProvider.state('home',{
        url:'/home',
        component: 'home'
    })
    .state('about',{
        url:'/about',
        component: 'about',
    })
        
    .state('users',{
        url:'/users',
        component: 'users'
    })
    .state('profile',{
        url:'/profile',
        component: 'profile'
    })
    .state('contact',{
        url:'/contact',
        component: 'contact'
    })
})

angular.element(function() {
    angular.bootstrap(document, ['routerApp']);
});

    
