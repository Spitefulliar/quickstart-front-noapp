$(document).ready(function() {
	var files = require.context('../img/sprite/', false, /\.svg$/);
	files.keys().forEach(files);
	// console.log( files.keys() );

  let sprOut = $('#sprite-output');
  if (sprOut.length) {
    let sprKeys = files.keys();
    let tpl = require('./../layouts/includes/icon.twig');
    let fullHtml = '';
    for (var i = sprKeys.length - 1; i >= 0; i--) {
      let icon = sprKeys[i].slice(2,-4);
      let iconNameTpl = `<p>${icon}</p>`;
      // console.log(icon);
      let html = '<div class="sprite-output__item">' + iconNameTpl + tpl({icon: {
        'name': icon
      }}) + '</div>';
      fullHtml += html;
    }
    sprOut.html(fullHtml);
  };
});
