/**
 * Created by Mohammed on 1/10/2015.
 */

app.controller('ContactController',function($scope,$location,ContactService,$routeParams){

    ContactService.listContact(function(contacts){
        $scope.contacts = contacts.Contacts;

    });

    $scope.$on("$routeChangeSuccess", function () {
        if ($location.path().indexOf("/editContact/") == 0) {
            var id = $routeParams["id"];
            ContactService.detailContact($routeParams.id, function (contact) {
                $scope.currentContact = contact.Contact;
            });
        }
    });

    $scope.createContact = function (contact) {
        ContactService.saveContact(contact);
    }

    $scope.updateContact = function (contact) {
        ContactService.updateContact(contact);
    }

    $scope.deleteContact = function (contact) {
        ContactService.deleteContact(contact);
    }

    $scope.cancel = function () {
        $location.path('/');
    }

});