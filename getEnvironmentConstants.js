const fs = require('fs');


// expose environment variables to the frontend
const frontendConstants = [
  'APP_NAME',
  'APP_HOST',
  'SERVER_PORT',
  'ASSETS_SERVER_PORT',
  'ENVIRONMENT',
  'DB_DATABASE_NAME',
  'DB_DATABASE_PORT'
];

const { NODE_ENV } = process.env;

const path = fs.existsSync(`.env.${NODE_ENV}`)
  ? `.env.${NODE_ENV}`
  : '.env';

require('dotenv').config({ path });
process.env['env.config']=path;

/*
dotenvFiles.forEach(dotenvFile => {
  if (fs.existsSync(dotenvFile)) {
    require('dotenv-expand')(
      require('dotenv').config({
        path: dotenvFile,
      })
    );
  }
});
*/

function getEnvironmentConstants() {
  
  const arrayToObject = (array) =>
  array.reduce((obj, item, key) => {
    obj[item] = JSON.stringify(process.env[item]);
    return obj;
  }, {})

  return arrayToObject(frontendConstants);      
}

module.exports = getEnvironmentConstants;