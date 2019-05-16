$( document ).ready(function() {
  $('.home_2 .owl-carousel').owlCarousel({
      loop:true,
      margin:20,
      nav:false,
      // navText : ["<img src='img/arr_left.png'>","<img src='img/arr_right.png'>"],
      responsive:{
          0:{
              items:2
          },
          600:{
              items:3
          },
          1000:{
              items:4
          }
      }
  });


});
