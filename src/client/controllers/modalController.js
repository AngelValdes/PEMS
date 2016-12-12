(function () {
    "use strict";
    angular.module("app")
        .controller("modalController", ["$uibModalInstance", "$location","items", "$http", modalController]);

    function modalController($uibModalInstance, $location, items, $http) {
      var vm = this;
      vm.name;
      vm.password;
      var baseUrl = "http://localhost:5000/api/v1";
      vm.modal = items.modal;
      vm.changePage = function () {
        getToken()
          .success(function () {
            var token = localStorage.getItem("token");
            if (token) {
              $uibModalInstance.dismiss("cancel");
              $location.path("/privatePortal");
            }
          })
          .error(function (error) {
            console.log(error);
          });
      };
      function getToken(){
        var userPassword = {"name": vm.name, "password": vm.password};
        return $http.post(baseUrl + "/token", userPassword)
        .success(function(data){
          console.log(data);
            localStorage.setItem("name", vm.name);
            localStorage.setItem("token", data);
            vm.message = "";
        })
        .error(function(error){//display error in popup
            console.log(error);
        });
      }

    }
})();
