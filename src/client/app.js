(function(){
    angular.module("app",["ngRoute", "ngAnimate", "ngSanitize", "ui.bootstrap"]) //, "ngTouch"
    .config(function($routeProvider) {
      $routeProvider
      .when("/", {
        templateUrl: "/views/home.html",
        controller: "homeController",
        controllerAs: "home"
      })
      .when("/portal", {
        templateUrl : "/views/portal.html"
      })
      .when("/login", {
        templateUrl : "/views/login.html"
      })
      .when("/privatePortal", {
        templateUrl: "/views/privatePortal.html",
        controller: "privatePortalController",
        controllerAs: "privatePortal"
      })
      .when("/aboutus", {
        templateUrl : "/views/aboutus.html"
      })
      .when("/jobs", {
        templateUrl : "/views/jobs.html"
      });
    });

})();
