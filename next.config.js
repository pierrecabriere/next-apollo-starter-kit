const withSass = require('@zeit/next-sass');
const path = require('path');
module.exports = withSass({
  sassLoaderOptions: {
    includePaths: [
      path.resolve(__dirname, 'styles')
    ]
  }
});
