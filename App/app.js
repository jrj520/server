/**
 * Created by Admin on 2017/10/19.
 */
var app = angular.module("myApp", ["ui.router","ionic"]);
app.config(function ($stateProvider, $locationProvider, $urlRouterProvider) {
    $locationProvider.hashPrefix('');
    $stateProvider
        .state("serv", {
            url: "/serv",
            templateUrl: "./App/View/server.html",
            controller:"carController"
        })
        .state("finance", {
            url: "/finance",
            templateUrl: "./App/View/finance.html"
        });
    $urlRouterProvider.otherwise("/serv");
});