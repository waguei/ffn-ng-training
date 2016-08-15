var p = require('./package.json');
var OUTPUT_PATH = "/data/images/cams/lib/dev/";
var USE_USER_BRANCH = true;

module.exports = {
  entry: [
    './public/app.js'
  ],
  devtool:'eval',
  output: {
    path: './public/',
    filename: "bundle.js"
  }
}
