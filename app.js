/**
 * Created by Mohammed on 1/10/2015.
 */

 var app = angular.module('app',['ngRoute']);

 app.config(function($routeProvider){

     $routeProvider.
         when('/contacts',
         {
             templateUrl: 'templates/list-contacts-view.html',
             controller: 'ContactController'
         })
         . when('/newContact',
         {
             templateUrl: 'templates/new-contact-view.html',
             controller: 'ContactController'
         })
         . when('/contacts/edit/:id',
         {
             templateUrl: 'templates/edit-contact-view.html',
             controller: 'ContactController'
         })
         . when('/contacts/:id',
         {
             templateUrl: 'templates/detail-contact-view.html',
             controller: 'DetailViewController'
         })
         .otherwise({
             templateUrl: "templates/list-contacts-view.html",
             controller: 'ContactController'
         });

 });

 app.constant("baseUrl", "http://localhost:8017/api/Contact/");