exports.getLogin = (req, res, next) => {
  // const isLoggedIn = req.get('cookie').split(';')[0].trim().split('=')[1] === 'true';
  console.log(req.session.isLoggedIn);
         res.render('auth/login', {
           path: '/login',
           pageTitle: 'Login',
           isAuthenticated: false
         });
       
   
   };
exports.postLogin = (req, res, next) => {
    //req.isLoggedIn = true;
    //res.setHeader('Set-Cookie', 'loggedId=true');
    req.session.isLoggedIn = true;
         res.redirect('/');
       
   
   };
  