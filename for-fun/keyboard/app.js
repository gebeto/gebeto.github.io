var main = document.getElementById('wrapper');
var myKeys = document.getElementsByClassName('key');
var inp = document.getElementById('inp');
var words = [
  "import", "export",
  "from", "default",
  "while", "function",
  "return", "react",
  "Touchable", "Highlight",
];



inp.value = words.join(' ').toUpperCase();

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

document.addEventListener('keydown', function(ev) {
  // console.log(ev.key);
  for (var key in myKeys){
    if (myKeys[key].innerText === ev.key.toUpperCase()) {
      myKeys[key].style.background = getRandomColor();
      myKeys[key].style.padding = '16px';
    }
  }
  if (ev.key === inp.value[0].toLowerCase()) {
    inp.value = inp.value.slice(1);
  }
  if (ev.key === ' ') {
    inp.value += ' ' + words[Math.round(Math.random() * words.length)].toUpperCase()
  }
});

document.addEventListener('keyup', function(ev) {
  for (var key in myKeys){
    if (myKeys[key].innerText === ev.key.toUpperCase()) {
      myKeys[key].style.background = '#333';
      myKeys[key].style.padding = '0';
    }
  }
});
