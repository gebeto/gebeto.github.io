(function() {
  var elements = document.querySelectorAll('#random-number');

  for (var i = 0; i < elements.length; i++) {
    var elem = elements[i];
    var rangeFrom = parseInt(elem.getAttribute('data-range-from'));
    var rangeTo = parseInt(elem.getAttribute('data-range-to'));
    elem.textContent = Math.floor(Math.random() * (rangeTo - rangeFrom) + rangeFrom);
  }
}())