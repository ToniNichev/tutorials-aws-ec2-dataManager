import PageData from '../src/containers/PageLayout/PageData'; 
import queries from '../src/queries';
const url = require('url');
const querystring = require('querystring');

const requestDataFromAPI = async (req, res, next) => {
  const result = await queries.getFeatureFlags();

  req.parsedUrl = url.parse(req.url);
  const pathname = req.parsedUrl.pathname;  
  const parsedQs = querystring.parse(req.parsedUrl.query);
  
  const templateName = PageData[pathname]?.template;
  if(!templateName) {
    console.log("NO templateName!");
    console.log("req.url: ", pathname);
    return null;
  }
  req.templateName = templateName;
  req.apiData = result;
  if(next !== null)
    next(); // continue once the data is available.

}

export default requestDataFromAPI;