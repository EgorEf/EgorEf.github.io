var ghpages = require('gh-pages');

ghpages.publish('dist', (err) => { (err && console.log(err)) || console.log('Deploy Complete!') } );