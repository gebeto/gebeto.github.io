var iphone;

$(document).ready(function() {
	$(".list-group-item").on("click", function(){
	});
	// addProducts();
	$.getJSON('iphone.json', {}, function(json, textStatus) {
		alert(textStatus);
	});
});

function createHtml(elem) {
	var htmlContent = "";
	htmlContent += '<div class="col-sm-4 col-lg-4 col-md-4" id="hov"><div class="thumbnail">';
	htmlContent += '<img src="';
	htmlContent += elem["image"];
	htmlContent += '" alt=""><div class="caption">';
	htmlContent += '<h4 class="pull-right">$';
	htmlContent += elem["price"];
	htmlContent += '</h4><h4><a>';
	htmlContent += elem["title"];
	htmlContent += '</a></h4><p>';
	htmlContent += elem["description"];
	htmlContent += '</p></div><div class="ratings"><p class="pull-right">';
	htmlContent += elem["reviews"];
	htmlContent += ' reviews</p><p>';
	for (var i = 0; i < elem["stars"]; i++){
		htmlContent += '<span class="glyphicon glyphicon-star"></span>';
	}
	htmlContent += '</p></div><center><button class="btn btn-block btn-lg">Купить</button></center></div></div>';
	return htmlContent;
}

function addProducts() {
	var products = document.getElementById("products");
	for (var i = 0; i < content["iphone"].length; i++)
		products.innerHTML += createHtml(content["iphone"][i]);
}

