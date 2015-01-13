/**
 * Created by Mohammed on 1/10/2015.
 */
app.factory('ContactService',function($http,baseUrl,$location,$route){
    return{

        getContacts: function(callback){
           $http.get(baseUrl).success(callback)
               .error(function(){
               //DO Something
           });
        },

        getContact: function(id, callback){
            $http.get(baseUrl+id).success(callback)
                .error(function(){
                //DO Something
            });
        },

        saveContact:  function(contact){
            $http.post(baseUrl, contact).success(function(){
                $location.path('/contacts');
            }).error(function(){
                //DO Something
            });

        },

        deleteContact: function(contact){
            $http.delete(baseUrl+contact.Id).success(function(){
                $route.reload();
            }).error(function(){
                //DO Something
            });
        },

        updateContact: function(contact){
            $http.put(baseUrl,contact).success(function(){
                $location.path('/contacts');
            }).error(function(){
               //DO Something
            });
        }

    };
});