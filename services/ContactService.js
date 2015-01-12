/**
 * Created by Mohammed on 1/10/2015.
 */
app.factory('ContactService',function($http,baseUrl){
    return{

        listContact: function(callback){
           $http.get(baseUrl).success(callback);
        },

        detailContact: function(id, callback){
            $http.get(baseUrl+id).success(callback);
        },

        saveContact:  function(contact){
            $http.post(baseUrl, contact);
        },

        deleteContact: function(contact){
            $http.delete(baseUrl+contact.Id);
        },

        updateContact: function(contact){
            $http.put(baseUrl+contact.Id,contact);
        }

    };
});