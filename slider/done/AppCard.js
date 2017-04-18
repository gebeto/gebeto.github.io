

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

	this.rendered.innerHTML = `
		<div class="row">
			<div class="col-sm-12 col-md-12 col-lg-12">
				<div id="panes` + this.data.appPrefix + `Tabs" style="background-color:#45432;">
					<ul class="nav nav-pills">
						<li class="active">
							<a href="#pan` + this.data.appPrefix + `1" data-toggle="tab">` + this.data.appName + `</a>
						</li>
						<li class="dropdown">
							<a class="dropdown-toggle" data-toggle="dropdown" href="#" >Больше <span class="caret"></span></a>
							<ul class="dropdown-menu">
								<li><a href="#pan` + this.data.appPrefix + `2" data-toggle="tab">Описание</a></li>
								<li><a href="#pan` + this.data.appPrefix + `3" data-toggle="tab">Возможности</a></li>
							</ul>
						</li>
					</ul>
					<div class="tab-content clearfix">
						<div class="tab-pane active" id="pan` + this.data.appPrefix + `1">
							<div class="page-application-name">` + this.data.appTItle + `</div>
							<div class="page-application-author">Разработчик: <a href="` + this.data.developerUrl + `" style="text-decoration:none;color:#68aaf1;">` + this.data.developerName + `</a></div>
							<div class="page-application-version">
								Версия приложения: <b>` + this.data.appVersion + `</b><br />
								Версия ` + this.data.appName + `: <b>` + this.data.tweakVersion + `</b>
							</div>
						</div>
						<div class="tab-pane fade" id="pan` + this.data.appPrefix + `2">
							` + this.data.appDescription + `
						</div>
						<div class="tab-pane fade" id="pan` + this.data.appPrefix + `3">
							<p></p>
							<li>` + this.data.tweakCapabilities + `</li>
							<p></p>
						</div>
					</div>
					<a href="#" style="text-decoration:none;">
						<div class="cont-butt" style="background-color: #42ca52;">
							<b>Установить</b>
						</div>
					</a>
				</div>
			</div>
		</div>`;

	return this.rendered;
}



