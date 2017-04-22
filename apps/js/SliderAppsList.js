;(function() {

var currentCarouselIndex = 0;

// function sliderInit(apps) {
window.sliderInit = function(apps) {
	var carousel = $("#frame ul");
	var currentApp;

	apps.map(function(appData, index){
		// new SliderCard(document.getElementById('frame').children[0], appData.sliderIconUrl, appData.sliderBg);
		new SliderCard(carousel[0], appData.sliderIconUrl, appData.sliderBg);
	});

	currentApp = new AppCard(apps[0]);
	currentApp.rendered.style.animationDuration = '.2s';
		$('#headerwrap-app').append(currentApp.refreshElement());
		
		carousel.itemslide({});
		carousel.on('changeActiveIndex', function(args) {

		if (currentCarouselIndex === carousel.getActiveIndex()) return;
		currentCarouselIndex = carousel.getActiveIndex();

				var index = carousel.getActiveIndex();
				$(currentApp.rendered).addClass('animated slideOutDown');
				$(currentApp.rendered).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
						currentApp.refreshElement(apps[index]);
						$(currentApp.rendered).addClass('animated slideInUp');
						$(currentApp.rendered).removeClass('animated slideOutDown');
						$(currentApp.rendered).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
								$(currentApp.rendered).removeClass('animated slideInUp');
						});
				});
				window.location.hash = index;
		});

		$(window).resize(function () {
				carousel.reload();
		});
}


function SliderCard(sliderWrapper, iconUrl, background) {
	this.rendered = document.createElement('li');
	this.rendered.setAttribute('no-drag', true);
	this.rendered.innerHTML = '\
		<div class="row application-box"> \
			<img class="page-application-icon" src="' + iconUrl + '"> \
		</div>';
	this.rendered.children[0].style.background = (background[0] === '#' ? background : 'url(' + background + ')');
		this.rendered.children[0].style.backgroundRepeat = 'no-repeat';
		this.rendered.children[0].style.backgroundSize = 'cover';

	sliderWrapper.appendChild(this.rendered);
}


function AppCard(appData) {

	this.data = appData;
	this.rendered = document.createElement('div');
	this.rendered.className = 'container';
	this.rendered.id = this.data.appPrefix;

}

AppCard.prototype.refreshElement = function(appData) {

	if (appData) {
		this.data = appData;
	}

	this.rendered.innerHTML = '<div class="row">\
			<div class="col-sm-12 col-md-12 col-lg-12">\
				<div id="panes' + this.data.appPrefix + 'Tabs" style="background-color:#45432;">\
					<ul class="nav nav-pills">\
						<li class="active">\
							<a href="#pan' + this.data.appPrefix + '1" data-toggle="tab">' + this.data.appName + '</a>\
						</li>\
						<li class="dropdown">\
							<a class="dropdown-toggle" data-toggle="dropdown" href="#" >Больше <span class="caret"></span></a>\
							<ul class="dropdown-menu">\
								<li><a href="#pan' + this.data.appPrefix + '2" data-toggle="tab">Описание</a></li>\
								<li><a href="#pan' + this.data.appPrefix + '3" data-toggle="tab">Возможности</a></li>\
							</ul>\
						</li>\
					</ul>\
					<div class="tab-content clearfix">\
						<div class="tab-pane active" id="pan' + this.data.appPrefix + '1">\
							<div class="page-application-name">' + this.data.appTItle + '</div>\
							<div class="page-application-author">Разработчик: <a href="' + this.data.developerUrl + '" style="text-decoration:none;color:#68aaf1;">' + this.data.developerName + '</a></div>\
							<div class="page-application-version">\
								Версия приложения: <b>' + this.data.appVersion + '</b><br />\
								Версия ' + this.data.appName + ': <b>' + this.data.tweakVersion + '</b>\
							</div>\
						</div>\
						<div class="tab-pane fade" id="pan' + this.data.appPrefix + '2">\
							' + this.data.appDescription + '\
						</div>\
						<div class="tab-pane fade" id="pan' + this.data.appPrefix + '3">\
							<p></p>\
							<li>' + this.data.tweakCapabilities + '</li>\
							<p></p>\
						</div>\
					</div>\
					<a href="' + this.data.installationUrl + '" style="text-decoration:none;">\
						<div class="cont-butt" style="background-color: #42ca52;">\
							<b>Установить</b>\
						</div>\
					</a>\
				</div>\
			</div>\
		</div>\
		<div class="center-block col-sm-12 col-md-7 col-lg-6" style="margin-top:10px;float:none;">\
			<div style="padding:10px 10px;">\
				<div id="myCarousel" class="carousel slide" data-ride="carousel">\
					<div class="carousel-inner" role="listbox">\
						' + this.data.appScreenshots.map(function(item, index) {
							return '<div class="item ' + (index === 0 ? 'active' : '') + '">\
										<img src="' + item + '" alt="screenshot">\
									</div>'
						}).join('') + '</div>\
					<a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">\
						<span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>\
						<span class="sr-only">Previous</span>\
					</a>\
					<a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">\
						<span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>\
						<span class="sr-only">Next</span>\
					</a>\
				</div>\
			</div>\
		</div>';

	return this.rendered;
}


})();