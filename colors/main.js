window.onload = function() {
  console.log(getParamsFromUrl());
  var colors = getParamsFromUrl()['colors'];
  document.body.appendChild(new ColorsList(colors));
}


function getParamsFromUrl() {
  var rawParams = window.location.href.split('?')[1].split('&');
  var params = {};
  for (var i = 0; i < rawParams.length; i++) {
    var splitedParam = rawParams[i].split('=');
    params[splitedParam[0]] = splitedParam[1].split(',');
  }
  return params;
}

function ColorsList(colors) {
  this.colors = colors.map(function(item, index){
    if (item[0] !== '#') return '#' + item;
    return item;
  });
  this.rendered = document.createElement('div');
  this.colorsList = document.createElement('ul')
  this.colorView = document.createElement('div');
  return this.createElement();
}

ColorsList.prototype.createElement = function() {
  this.rendered.appendChild(this.colorsList);
  this.rendered.appendChild(this.colorView);

  this.rendered.className = 'colors-list';

  this.colors.map(function(item, index, list) {
    this.colorsList.appendChild(new ColorBlock(item, 100 / list.length, this.colorView));
  }.bind(this));

  this.colorView.className = 'color-view';

  return this.rendered;
}


function ColorBlock(color, width, colorView) {
  this.color = color;
  this.colorView = colorView;
  this.width = width;
  return this.createElement();
}

ColorBlock.prototype.createElement = function() {
  var li = document.createElement('li');
  li.className = 'color-list-item';
  li.textContent = this.color;
  li.style.backgroundColor = this.color;
  li.style.width = this.width + '%';

  li.addEventListener('mouseover', function() {
    this.colorView.style.backgroundColor = this.color;
    this.colorView.textContent = this.color;
  }.bind(this));

  return li;
}
