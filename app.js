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
         . when('/newContact',
         {
             templateUrl: 'templates/new-contact-view.html',
             controller: 'ContactController'
         })
         . when('/editContact/:id',
         {
             templateUrl: 'templates/edit-contact-view.html',
             controller: 'ContactController'
         })
         . when('/detailContact/:id',
         {
             templateUrl: 'templates/detail-contact-view.html',
             controller: 'DetailViewController'
         });

 });

 app.constant("baseUrl", "http://localhost:8015/Contact/");