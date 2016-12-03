(function(){
    angular.module("app")
    .controller("carouselController", [carouselController]);
    function carouselController(){       
        var vm = this;
        vm.myInterval = 5000;
        vm.noWrapSlides = false;
        vm.active = 1;
        vm.slides = [
            {id: 0, image: "/contents/students0.png", imageSmall: "/contents/students0Small.png", text: "Slide #1", alt: "Students Group 1"},
            {id: 1, image: "/contents/students1.png", imageSmall: "/contents/students1Small.png", text: "Slide #2", alt: "Students Group 2"},
            {id: 2, image: "/contents/students2.png", imageSmall: "/contents/students2Small.png", text: "Slide #3", alt: "Students Group 3"}
        ];
    }
 })();