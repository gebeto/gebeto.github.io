var carousel;
var currentApp;

var apps = [{
    appName: 'IGPreferences',
    appTItle: 'Instagram + IGPreferences',
    appPrefix: 'IGP',
    tweakCapabilities: 'NaN',
    appDescription: 'Looks like IGPreference description',
    developerUrl: 'https://vk.com/orlov_alexender',
    developerName: 'Александр Орлов',
    appVersion: '16.0',
    tweakVersion: '0.1',
    installationUrl: '#',
},{
    appName: 'VKPreferences',
    appTItle: 'VK + VKPreferences',
    appPrefix: 'VKP',
    tweakCapabilities: 'NaN',
    appDescription: 'Looks like VKPreference description',
    developerUrl: 'https://vk.com/orlov_alexender',
    developerName: 'Александр Орлов',
    appVersion: '10.0',
    tweakVersion: '1.0',
    installationUrl: '#',
},]

$(document).ready(function () {

    carousel = $("#frame ul");

    carousel.itemslide({
        // one_item: true,
    }); //initialize itemslide

    currentApp = new AppCard(apps[carousel.getActiveIndex()]);
    currentApp.rendered.style.animationDuration = '.2s';

    carousel.on('changeActiveIndex', function(args) {
        var index = carousel.getActiveIndex();
        $(currentApp.rendered).addClass('animated slideOutDown');
        $(currentApp.rendered).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
            currentApp.refreshElement(apps[index]);
            $(currentApp.rendered).removeClass('animated slideOutDown');
            $(currentApp.rendered).addClass('animated slideInUp');
            $(currentApp.rendered).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
                $(currentApp.rendered).removeClass('animated slideInUp');
            });
        });
        window.location.hash = index;
    });

    $(window).resize(function () {
        carousel.reload();
    }); //Recalculate width and center positions and sizes when window is resized

    // $('#apps').append(new AppCard(instaApp).refreshElement());
    $('#headerwrap-app').append(currentApp.refreshElement());

});


