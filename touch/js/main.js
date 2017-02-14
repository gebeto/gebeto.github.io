$(function() {
  $("[class=cell]").swipe({
    //Generic swipe handler for all directions
    swipeStatus: function(event, action, direction, duration, arg, arg1) {
      console.log('cell swipe', action, direction, arg);
      if (direction === 'left' && arg > 120) {
        $(this).addClass('opened');
      } else if (direction === 'right' && arg > 120) {
        $(this).removeClass('opened');
      }
    }
  });

});
