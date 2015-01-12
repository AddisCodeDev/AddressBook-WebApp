/**
 * Created by Mohammed on 1/10/2015.
 */

app.controller('ContactController',function($scope,$location,ContactService){

    $scope.currentContact = null;

    ContactService.listContact(function(contacts){
        $scope.contacts = contacts.Contacts;
    });

    $scope.createContact = function (contact) {
        ContactService.saveContact(contact);
        $location.path('/');
    }

    $scope.updateContact = function (contact) {
        ContactService.updateContact(contact);
        $location.path('/');
    }

    $scope.deleteContact = function (contact) {
        ContactService.deleteContact(contact);
    }

    $scope.editOrCreateContact = function (contact) {
        if(contact != null){
            $scope.currentContact = contact;
        }else{
            $scope.currentContact = {};
        }
        $location.path('/create');
        console.log( $scope.currentContact);
    }

    $scope.saveEdit = function (contact) {
        if (angular.isDefined(contact.id)) {
            $scope.updateContact(contact);
        } else {
            $scope.createContact(contact);
        }
    }

    $scope.cancelEdit = function () {
        $scope.currentContact = {};
        $location.path('/');
    }

});