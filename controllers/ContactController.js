/**
 * Created by Mohammed on 1/10/2015.
 */

app.controller('ContactController',function($scope,ContactService,$location,$routeParams){

    ContactService.getContacts(function(contacts){
        $scope.contacts = contacts.Contacts;

    });

    $scope.createContact = function (contact) {
        ContactService.saveContact(contact);
    }

    $scope.updateContact = function (contact) {
        ContactService.updateContact(contact);
    }

    $scope.deleteContact = function (contact) {
        ContactService.deleteContact(contact.Id);
    }

    $scope.cancel = function () {
        $location.path('/contacts');
    }

    $scope.$on("$routeChangeSuccess", function () {
        if ($location.path().indexOf("/contacts/edit/") == 0) {
            var id = $routeParams["id"];
            ContactService.getContact($routeParams.id, function (contact) {
                $scope.currentContact = contact.Contact;
            });
        }
    });

});