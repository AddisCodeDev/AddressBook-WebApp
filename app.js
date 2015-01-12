/**
 * Created by Mohammed on 1/10/2015.
 */

 var app = angular.module('app',['ngRoute']);

 app.config(function($routeProvider){

     $routeProvider.
         when('/',
         {
             templateUrl: 'templates/list-contacts-view.html',
             controller: 'ContactController'
         })
         . when('/create',
         {
             templateUrl: 'templates/edit-view.html',
             controller: 'ContactController'
         })

 });

 app.constant("baseUrl", "http://localhost:8015//Contact/");