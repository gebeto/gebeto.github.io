var appListContainer = document.getElementById('app-list');

function createOne(content) {
  var html = `
    <a href="` + content.url + `" class="col-sm-4 col-md-3 col-lg-4">
      <div class="row">
        <div class="col-md-12 app-block">
          <div class="name">` + content.title + `</div>
          <div class="desc">` + content.description + `</div>
        </div>
      </div>
    </a>`;
  appListContainer.innerHTML += html;
}

var cont = [
  {
    title: 'Slavik',
    description: 'Slavik Test project add',
    url: 'http://vk.com/gebeto'
  },{
    title: 'Slavik',
    description: 'Slavik Test project add',
    url: 'http://vk.com/gebeto'
  },{
    title: 'Slavik',
    description: 'Slavik Test project add',
    url: 'http://vk.com/gebeto'
  },
];

cont.map(function(item, index) {
  createOne(item);
});
