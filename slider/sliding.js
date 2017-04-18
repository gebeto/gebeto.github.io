var carousel;
$(document).ready(function () {

    carousel = $("#frame ul");

    carousel.itemslide({
        one_item: true,
    }); //initialize itemslide
    
    carousel.on('changeActiveIndex', function(args) {
        var index = carousel.getActiveIndex();
        window.location.hash = index;
        $('#wrapper').html('<h1>' + index + '</h1>');
    });

    $(window).resize(function () {
        carousel.reload();
    }); //Recalculate width and center positions and sizes when window is resized
});


