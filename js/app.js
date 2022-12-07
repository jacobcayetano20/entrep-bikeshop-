$(document).ready(function(){
 //hero-Slider
 $('#hero-slider').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    items:1,
    dots:false,
    smartSpeed:1000,
    responsive:{
        0:{
            nav:false,
        },
       768:{
        nav:true,
       }
    }
})


});
 

