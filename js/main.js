$(document).ready(function(){

  $('.slider').slick({
    centerPadding: '40px',
    adaptiveHeight: true
  });

  var copy = 'craftly designed and coded with love by Daniele Peviani &copy; ' + new Date().getFullYear();
  $('#copyright').html(copy);

  $('a[href*="#"]:not([href="#"])').click(function() {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top -34
    }, 1000);
  });

  $(window).scroll(function(){
  var sticky = $('.menu'),
      scroll = $(window).scrollTop();

  if (scroll >= ($('main').position().top - 44)) {
    sticky.addClass('fixed');
  } else {
    sticky.removeClass('fixed');

  }
});

});
