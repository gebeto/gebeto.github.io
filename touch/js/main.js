$(function() {
  var setOpened = false;

  $("[class=cell]").swipe({
    swipeStatus: function(event, action, direction, length, duration) {
      console.log('cell:', action, direction, length);
      if (direction === 'left' && !$(this).hasClass('opened')) {
        $(this).removeClass('animated');
        $(this).css({left: -length});
        if (-length < -50) setOpened = true;
      }

      if (event.type === 'touchend') {
        if (setOpened) {
          $(this).attr('style', '');
          $(this).removeClass('closed');
          $(this).addClass('animated');
          $(this).addClass('opened');
        }
      }

      if (action === 'cancel') {
        $(this).removeClass('opened');
        $(this).attr('style', '');
        $(this).addClass('animated');
        $(this).addClass('closed');
        setOpened = false;
      }
    }
  });

  // $("[class=cell]").on('transitionend', function() {
  //   $(this).removeClass('animated');
  // });

});
