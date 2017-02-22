var fs = require('fs')
var Promise = require('promise')
// var _ = require('lodash')
var md = require('markdown-it')()
var fm = require('front-matter')

// Promise version

var readFile = Promise.denodeify(require('fs').readFile)
var writeFile = Promise.denodeify(require('fs').writeFile)

function readMarkdown(filename, callback) {
  return readFile(filename, 'utf8')
    .then(d => {
         writeHTML('_site/index2.html', md.render(fm(d).body))
       })
}

function writeHTML(filename, result, callback) {
  return writeFile(filename, result)
}

readMarkdown('_pages/index.md');



// Make all of this async promises...
// var result
// var content
//
// fs.readFile('_partials/head.html', 'utf8', function(err, data) {
//   result = data
//   fs.readFile('_pages/index.md', 'utf8', function(err, data) {
//     if (err) throw err
//     content = fm(data)
//     result += md.render(content.body)
//     result += '<footer></footer></body></html>'
//     console.log(result)
//     fs.mkdir('_site', function(err) {
//       console.log("folder created")
//     });
//     fs.writeFile('_site/index.html', result, function(err) {
//       console.log('file written')
//     });
//   });
// });
