$(".open-button").click(function() {
  $(".slide-menu").addClass('menu-open');
  $(".page-container-inner").addClass('page-open');
});

$(".close-button").click(function() {
  $(".slide-menu").removeClass('menu-open');
  $(".page-container-inner").removeClass('page-open');
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
