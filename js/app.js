$(document).ready(function(){
 //hero-Slider
 $('#hero-slider').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    items:1,
    dots:false,
    smartSpeed: 850,
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


var $grid = $('.collection-list').isotope({
 
  });

  $('.filter-button-group').on( 'click', 'button', function() {
    var filterValue = $(this).attr('data-filter');
    resetFilterBtns();
    $(this).addClass('active-filter-btn');
    $grid.isotope({ filter: filterValue });
  });
  
  var filterBtns = $('.filter-button-group').find('button');
  function resetFilterBtns(){
    filterBtns.each(function(){
      $(this).removeClass('active-filter-btn');
    });
  }
//Product Details
var ProductImg = document.getElementById("ProductImg");
			var	SmallImg=document.getElementsByClassName("small-img");

			SmallImg[0].onclick = function()
			{
				ProductImg.src = SmallImg[0].src;
			}
			SmallImg[1].onclick = function()
			{
				ProductImg.src = SmallImg[1].src;
			}
			SmallImg[2].onclick = function()
			{
				ProductImg.src = SmallImg[2].src;
			}
			SmallImg[3].onclick = function()
			{
				ProductImg.src = SmallImg[3].src;
			}
  
 

