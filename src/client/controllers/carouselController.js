(function(){
    angular.module("app")
    .controller("carouselController", [carouselController]);
    function carouselController(){       
        var vm = this;
        vm.myInterval = 5000;
        vm.noWrapSlides = false;
        vm.active = 1;
        vm.slides = [
            {id: 0, image: "/contents/students0.png", text: "Slide #1"},
            {id: 1, image: "/contents/students1.png", text: "Slide #2"},
            {id: 2, image: "/contents/students2.png", text: "Slide #3"}
        ];
    }
 })();