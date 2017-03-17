$(document).ready(function(){

  $('.slider').slick({
    centerPadding: '40px'
  });

  var copy = 'craftly designed and coded with love by Daniele Peviani &copy; ' + new Date().getFullYear();
  $('#copyright').html(copy);

  $('a[href*="#"]:not([href="#"])').click(function() {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 1000);
});

});
