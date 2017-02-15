$(function() {
  var swipeLengthToOpen = 50;
  var setOpened = false;

  $("[class=cell]").swipe({
    swipeStatus: function(event, action, direction, length, duration) {
      console.log('cell:', action, direction, length);
      if (direction === 'left' && !$(this).hasClass('opened')) {
        if ($(this).hasClass('animated')) {
          $(this).removeClass('animated');
        }
        $(this).css({left: -length});
        if (-length < -swipeLengthToOpen) setOpened = true;
      }

      if (action === 'end') {
        if (setOpened) {
          $(this).attr('style', '');
          $(this).removeClass('closed');
          $(this).addClass('animated');
          $(this).addClass('opened');
        }
      }

      if (direction === 'right' && $(this).hasClass('opened')) {
        $(this).removeClass('opened');
        $(this).attr('style', '');
        $(this).addClass('animated');
        $(this).addClass('closed');
        setOpened = false;
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
