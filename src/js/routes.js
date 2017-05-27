
export default function Routes(module){
    module.config(($stateProvider, $urlRouterProvider,  $locationProvider) => {
        $stateProvider
            .state("home", {
                url: "/",
                cache: false,
                templateUrl: "/home.html",
                controller: "homeCtrl"
            }).state("create", {
                url: "/create",
                cache: false,
                templateUrl: "/create.html",
                controller: "createCtrl"
            }).state("edit", {
                url: "/edit/:category:/:headline",
                cache: false,
                templateUrl: "/edit.html",
                controller: "editCtrl"
            }).state("category", {
                url: "/category/:category",
                cache: false,
                templateUrl: "/category.html",
                controller: "categoryCtrl"
            }).state("article", {
                url: "/article/:category/:headline",
                cache: false,
                templateUrl: "/article.html",
                controller: "articleCtrl"
            })
        $urlRouterProvider.otherwise("/");
        $locationProvider.html5Mode(true);
    });
}