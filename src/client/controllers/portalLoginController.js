(function(){
    angular.module("app")
    .controller("portalLoginController", [portalLoginController]);
    function portalLoginController(){
      var vm = this;
      vm.openLogin = function () {
        $dialog.dialog({}).open('loginModal.html');
      };
     
    }

 })();