/**
 * Created by Mohammed on 1/12/2015.
 */
app.controller('DetailViewController',function($scope,$location,ContactService,$routeParams) {

    ContactService.getContact($routeParams.id, function (contact) {
        $scope.contact = contact.Contact;
    });

    $scope.back = function () {
        $location.path('/contacts');
    }

});