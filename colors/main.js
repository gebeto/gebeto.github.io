window.onload = function() {
  console.log(getParamsFromUrl());
  var colors = getParamsFromUrl();
  document.body.appendChild(new ColorsList(colors));
}


function getParamsFromUrl() {
    var rawParams = window.location.href.split('?')[1];
    return rawParams.split(',');
}

function ColorsList(colors) {
  this.colors = colors.map(function(item, index){
    if (item.split('-').length > 1) {
      console.log(item);
      return item.split('-').map(function(itm, index) {
        return '#' + itm;
      }).join(' - ');
    }
    if (item[0] !== '#') return '#' + item;
    return item;
  });
  this.rendered = document.createElement('div');
  this.colorsList = document.createElement('ul')
  this.colorView = document.createElement('div');
  this.colorViewTitle = document.createElement('h1');
  return this.createElement();
}

ColorsList.prototype.createElement = function() {
  this.rendered.appendChild(this.colorsList);
  this.rendered.appendChild(this.colorView);

  this.rendered.className = 'colors-list';

  this.colors.map(function(item, index, list) {
    this.colorsList.appendChild(new ColorBlock(item, 100 / list.length, this.colorView));
  }.bind(this));

  this.colorViewTitle.className = 'h1';
  this.colorViewTitle.addEventListener('click', function() {
    createPalete(this.colors);
  }.bind(this));
  this.colorViewTitle.addEventListener('mouseover', function() {
    this.currentColor = this.textContent;
    this.textContent = 'Generate Palete';
  });
  this.colorViewTitle.addEventListener('mouseout', function() {
    this.textContent = this.currentColor;
  });
  this.colorView.className = 'color-view';
  this.colorView.appendChild(this.colorViewTitle);

  return this.rendered;
}


function ColorBlock(color, width, colorView) {
  this.color = color;
  this.isGradient = color.split('-').length > 1;
  this.colorView = colorView;
  this.width = width;
  return this.createElement();
}

ColorBlock.prototype.createElement = function() {
  var li = document.createElement('li');
  li.className = 'color-list-item';
  li.textContent = this.color;
  if (this.isGradient) {
    // li.style.background = 'linear-gradient(to top, #fefcea, #f1da36)';
    li.style.background = 'linear-gradient(' + this.color.split('-') + ')';
  } else {
    li.style.background = this.color;
  }
  li.style.width = this.width + '%';

  li.addEventListener('mouseover', function() {
    if (this.isGradient) {
      this.colorView.children[0].textContent = this.color;
      this.colorView.style.background = 'linear-gradient(' + this.color.split('-') + ')';
    } else {
      this.colorView.children[0].textContent = this.color;
      this.colorView.style.background = this.color;
    }
    // this.colorView.style.background = this.color;
    // this.colorView.children[0].textContent = this.color;
  }.bind(this));

  return li;
}
