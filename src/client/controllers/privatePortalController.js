(function(){
    angular.module("app")
    .controller("privatePortalController", ["$http", privatePortalController]);
    function privatePortalController($http){
      var vm = this;
      var baseUrl = "http://localhost:5000/api/v1";
      vm.user = {};
      vm.getCurrentUser = getCurrentUser;
      function getCurrentUser() {
        var token = localStorage.getItem("token");
        if (token) {
           var name = localStorage.getItem("name");
           $http.get(baseUrl + "students/" + name + "/" + "?token=" + token)
              .success(function(data){
                vm.user = data;
                console.log(data);
              })
              .error(function(data){
                  console.log(data);
              });
        }

      }

    }

 })();
