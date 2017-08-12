// October 20, 2015
var DAYS = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
var MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December'];

var GITHUB_REPOS_URL = 'https://api.github.com/users/gebeto/repos';
function getAllRepos() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', GITHUB_REPOS_URL);
  xhr.onreadystatechange = function() {
    console.log(xhr.readyState);
    if (xhr.readyState === 4) {
      var resp = JSON.parse(xhr.responseText)
      console.log(resp);
      createPosts(resp);
    }
  }
  xhr.send();
}


function createPosts(posts) {
  posts.sort(function(a, b) {
    // return (new Date(b.pushed_at)) - (new Date(a.pushed_at));
    return b.watchers - a.watchers;
  }).map(function(post, index) {
    var minipost = new MiniGithubPost(post);
    POSTS_WRAPPER.appendChild(minipost);
  });
}


var POSTS_WRAPPER = document.querySelector('.mini-posts');

function MiniGithubPost(data) {
	var date = new Date(data.pushed_at);
  var html = ' <header>';
  html += '       <h3><a href="#">' + data.name + '</a></h3>';
  html += '       <time class="published" datetime="2015-10-20">' + MONTHS[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear() + '</time>';
  html += '       <a href="#" class="author"><img src="images/avatar.jpg" alt="" /></a>';
  html += '       <ul class="stats">';
  html += '         <li><a href="#">' + data.language + '</a></li>';
  html += '         <li><a href="#" class="icon fa-star" title="Watchers">' + data.watchers + '</a></li>';
  html += '         <li><a href="#" class="icon fa-code-fork" title="Forks">' + data.forks + '</a></li>';
  html += '       </ul>';
  html += '     </header>';
  // html += '     <a href="#" class="image"><img src="images/' + data.image + '" alt="" /></a>';
  var elem = document.createElement('article');
  elem.className = 'mini-post';
  elem.innerHTML = html;
  return elem;
}

window.onload = getAllRepos;