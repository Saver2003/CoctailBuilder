const path = require('path');

const rootPath = __dirname;

module.exports = {
  rootPath,
  uploadPath: path.join(rootPath, '/public/uploads'),
  db: {
    url: 'mongodb://localhost:27017',
    name: 'coctail'
  },
  facebook: {
    appId: "173688026658472", // Enter your app ID here
    appSecret: "a94716239e361ad2131a51d23bacfee9" // Enter your app secret here
  }
};

