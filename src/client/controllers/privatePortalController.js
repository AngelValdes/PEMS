(function(){
    angular.module("app")
    .controller("privatePortalController", ["$http", privatePortalController]);
    function privatePortalController($http){
      var vm = this;
      var baseUrl = "http://localhost:5000/api/v1";
      vm.title = "From Private Portal Controller";
      vm.user = {};
      vm.user.addresses = [];
      vm.user.enrollments = [];
      //vm.getUserEnrollment = getUserEnrollment;
      function getUserInfoAndEnrollment() {
        var token = localStorage.getItem("token");
        if (token) {
           var name = localStorage.getItem("name");
           $http.get(baseUrl + "/students/" + name + "/" + "?fullInfo=true&token=" + token)
              .success(function(data){
                vm.user = data[0];
                console.log(data);
                getUserAddresses()
              })
              .error(function(data){
                  console.log(data);
              });
        }
      }
      function getUserAddresses() {
        var token = localStorage.getItem("token");
        if (token) {
           var name = localStorage.getItem("name");
           $http.get(baseUrl + "/users/" + name + "/addresses" + "?token=" + token)
             .success(function (data) {
                vm.user.addresses = data;
                console.log(data);
                getUserEnrollment();
              })
              .error(function(data){
                  console.log(data);
              });
        }
      }
      function getUserEnrollment() {
        var token = localStorage.getItem("token");
        if (token) {
           var name = localStorage.getItem("name");
           $http.get(baseUrl + "/students/" + name + "/enrollments" + "?token=" + token)
             .success(function (data) {
                vm.user.enrollments = data;
                console.log(data);
              })
              .error(function(data){
                  console.log(data);
              });
        }
      }
      getUserInfoAndEnrollment();
    }
 })();
