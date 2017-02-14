$(function() {
  $("[class=cell]").swipe({
    //Generic swipe handler for all directions
    swipeStatus: function(event, action, direction, duration, arg, arg1) {
      console.log('cell swipe', action, direction, arg);
      if (direction === 'left' && arg > 200) {
        $(this).addClass('opened');
      } else if (direction === 'right' && arg > 200) {
        $(this).removeClass('opened');
      }
    }
  });

});
