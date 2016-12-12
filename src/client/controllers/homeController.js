(function(){
    angular.module("app")
    .controller("homeController", ["$uibModal",homeController]);
    function homeController($uibModal){
        var vm = this;

  vm.openModal = openModal;

  function openModal() {
          var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: "/views/login.html",
                bindToController: true,
                controller: "modalController",
                controllerAs: "vm",
                size: "sm",
                resolve: {
                    items: function () {
                        var value = {
                        };
                        return value;
                    },
                }
            });
            modalInstance.result.then(function (respon) {
                var test = respon;
            });
        };


    }
 })();
