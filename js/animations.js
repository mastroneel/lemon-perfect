$(".open-button").click(function() {
  $(".slide-menu").addClass('menu-open');
  $(".page-container-inner").addClass('page-open');
});

$(".close-button").click(function() {
  $(".slide-menu").removeClass('menu-open');
  $(".page-container-inner").removeClass('page-open');
});





// image in circle fixed on scroll, then fade out




$(window).scroll(function() {


  var scroll = $(window).scrollTop();

  if($(window).innerWidth() >= 768) {

    if (scroll <= window.innerHeight) {
        $(".img-in-circle").removeClass('fixed-circle');
    }
    if (scroll >= window.innerHeight) {
        $(".img-in-circle").addClass('fixed-circle');
    }
    if (scroll <= 1391) {
        $(".img-in-circle-inner").removeClass('fade-out');
        // $(".hand-squeezing-lemon").css('opacity', 0);
        $(".hand-squeezing-lemon").addClass('fade-out');
    }
    if (scroll >= 1391) {
        $(".img-in-circle-inner").addClass('fade-out');
        // $(".hand-squeezing-lemon").css('opacity', 1);
        $(".hand-squeezing-lemon").removeClass('fade-out');
    }
    if (scroll >= 1391) {
        $(".img-in-circle-inner").addClass('fade-out');
    }

  }

});




// yellow fade
// $(window).scroll(function(){
//     $(".yellow-overlay").css("opacity", 1 - $(window).scrollTop() / 550);
//   });

  $(window).scroll(function() {
    var d = $('.yellow-overlay'),
        offsetT = d.offset().top + d.outerHeight(),
        scrollT = $(document).scrollTop(),
        y1 = 0, y2 = 1,
        x1 = 0, x2 = offsetT,
        m = (y2-y1)/(x2-x1);

    d.css('opacity', Math.max(0,y1 + m * scrollT));
  });


/*Interactivity to determine when an animated element in in view. In view elements trigger our animation*/
$(document).ready(function() {

//window and animation items
var animation_elements = $.find('.fade-in');
var web_window = $(window);

//check to see if any animation containers are currently in view
function check_if_in_view() {
//get current window information
var window_height = web_window.height();
var window_top_position = web_window.scrollTop();
var window_bottom_position = (window_top_position + window_height);

//iterate through elements to see if its in view
$.each(animation_elements, function() {

  //get the element's information
  var element = $(this);
  var element_height = $(element).outerHeight();
  var element_top_position = $(element).offset().top;
  var element_bottom_position = (element_top_position + element_height);

  //check to see if this current container is visible (its viewable if it exists between the viewable space of the viewport)
  if ((element_bottom_position >= window_top_position) && (element_top_position <= window_bottom_position)) {
    element.addClass('in-view');
  } else {
    // element.removeClass('in-view');
  }
});

}

//on or scroll, detect elements in view
$(window).on('scroll resize', function() {
  check_if_in_view()
})
//trigger our scroll event on initial load
$(window).trigger('scroll');

});














// // Hero fade to yellow on scroll
//
// $(function(){
//     $('.hero').data('size','big');
// });
//
// $(window).scroll(function(){
//     if($(document).scrollTop() > 50)
//     {
//         if($('.hero').data('size') == 'big')
//         {
//             $('.hero').data('size','small');
//             $('.hero').addClass('yellow');
//
//         }
//     }
//     else
//     {
//         if($('.hero').data('size') == 'small')
//         {
//             $('.hero').data('size','big');
//             $('.hero').removeClass('yellow');
//         }
//     }
// });
