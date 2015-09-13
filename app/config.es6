function Config($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('users', {
            url: "/users",
            controller: "UserController",
            templateUrl: "./app/features/users/user.html"
        })
        .state('home', {
            url: "/",
            controller: "UserController",
            templateUrl: "./app/features/users/user.html"
        });
}

Config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

export default Config;



