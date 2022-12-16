function cookiesManagement(cookieName, value, maxAge, req, res) {
  // example of adding/reading cookie
  var cookie = req.cookies[cookieName];
  if (cookie === undefined)
  {
    res.cookie(cookieName ,value, { maxAge: maxAge, httpOnly: false });
    console.log('cookie created successfully');
  } 
  else
  {
    // cookie was already present 
    console.log('cookie exists', cookie);
  } 
  //next(); // !Importat to continue execution.
}

export default cookiesManagement;