const home = require('./home');
const about = require('./about');
const settings = require('./settings');


module.exports = home.concat(
    about, 
    settings,

);