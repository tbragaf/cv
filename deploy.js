var ghpages = require('gh-pages');

ghpages.publish('dist', function(err) {});

// "deploy": "git add dist && git commit -m 'Subtree' && git push origin `git subtree split --prefix dist master`:gh-pages --force"