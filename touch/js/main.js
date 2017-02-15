$(function() {
  var setOpened = false;

  $("[class=cell]").swipe({
    swipeStatus: function(event, action, direction, length, duration) {
      console.log('cell swipe', direction, length, event);
      setOpened = false;
      $(this).removeClass('animated');
      $(this).removeClass('opened');
      if (direction === 'left') {
        $(this).css({left: -length});
        if (-length < -50) setOpened = true;
      }
      if (event.type === 'touchend') {
        if (setOpened) {
          $(this).attr('style', '');
          $(this).addClass('animated');
          $(this).addClass('opened');
        } else {
          $(this).removeClass('opened');
        }
      }
    },
    pinch: function(e) {
      console.log(e);
    }
  });

});
