var fs = require('fs');
var sass = require('node-sass');

fs.readFile(`${__dirname}/theme.scss`, 'utf8', function(err, content) {
  var results = sass.renderSync({
    data: content,
    includePaths: [`${__dirname}/node_modules/theme-base`]
  });
  fs.writeFile("theme.css", results.css);
});
