(function () {
    "use strict";
    angular.module("app")
        .controller("modalController", ["$uibModalInstance", "$location","items", modalController]);

    function modalController($uibModalInstance, $location, items) {
        var vm = this;
        vm.modal = items.modal;
            
        vm.changePage = function () {
            $uibModalInstance.dismiss("cancel");
            $location.path("/privatePortal");
        };

    }
})();