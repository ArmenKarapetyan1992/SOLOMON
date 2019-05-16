// var SliderArray = ['img/img18.png', 'img/img1.png'];
// var sliderImage = document.createElement('img');
// var imgNumber = 0;
// var number = 1;
// let bool = false;
// var slider = document.querySelector('.slider');
//
// slider.append(sliderImage);
// setInterval(function(){
//     sliderImage.setAttribute('src', SliderArray[imgNumber]);
//     sliderImage.style.animationDuration = "1s";
//     sliderImage.style.cssText = 'opacity:' + number;
//
//
//     ++imgNumber;
//     sliderImage.setAttribute('class', 'sliderImg');
//     console.log(imgNumber);
//     if(imgNumber == SliderArray.length){
//       imgNumber = 0;
//     }
// }, 2000)
// setInterval(function(){
//   if(bool === false){
//     number = 0;
//     bool = true;
//   }
//   else {
//     number = 1;
//     bool = false;
//   }
// },4000)


var owl = $('#owl_one');
owl.owlCarousel({
    // loop:false,
    // nav:false,
    // dots:false,
    animateOut: 'fadeOut',
    // stagePadding:0,
    // autoplay:false,
    // autoplayTimeout:5000,
    // autoplayHoverPause:false,
loop:true,
autoplay:true,
autoplayTimeout:1000,
margin: 10,
autoplayHoverPause:true,
    responsive:{
    0:{
        items:1
    },
    600:{
        items:1
    },
    1000:{
        items:1
    }
}
});

var owl = $('#owl_two');
owl.owlCarousel({
    // loop:false,
    // nav:false,
    // dots:false,
    animateOut: 'fadeOut',
    // stagePadding:0,
    // autoplay:false,
    // autoplayTimeout:5000,
    // autoplayHoverPause:false,
    loop:true,
    autoplay:true,
    autoplayTimeout:1500,
    // margin: 10,
    autoplayHoverPause:true,
        responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});
