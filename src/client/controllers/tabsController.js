(function(){
    angular.module("app")
    .controller("tabsController", [tabsController]);
    function tabsController($window){
        var vm = this;
        vm.tabs = [
            { title:"Parent", content:"Parent's children information" , disabled: true },
            { title:"Teacher", content:"Teacher classes", disabled: true },
            { title:"Employee", content:"Employee resources", disabled: true }
        ];

        vm.model = {
            name: 'Tabs'
        };
    }
 })();