$(function() {
  $("#test-swipe").swipe({
    //Generic swipe handler for all directions
    swipe: function(event, direction, distance, duration, fingerCount, fingerData) {
      console.log(direction);
      if (direction === 'left')
        $(this).find('#leftright').text( parseInt($(this).find('#leftright').text()) - distance );
      if (direction === 'right')
        $(this).find('#leftright').text( parseInt($(this).find('#leftright').text()) + distance );
      if (direction === 'up')
      $(this).find('#updown').text( parseInt($(this).find('#updown').text()) - distance );
      if (direction === 'down')
        $(this).find('#updown').text( parseInt($(this).find('#updown').text()) + distance );

      if (direction === 'up' || direction === 'down')
        $(this).css({top: parseInt($(this).find('#updown').text())});
      if (direction === 'left' || direction === 'right')
        $(this).css({left: parseInt($(this).find('#leftright').text())});
    }
  });

});
