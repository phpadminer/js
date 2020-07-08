const path = require('path');
const USER_HOME = process.env.HOME || process.env.USERPROFILE;


exports.defaultPath = path.join(USER_HOME,'.nodeTodoDB.txt');
exports.version = '0.0.4';
