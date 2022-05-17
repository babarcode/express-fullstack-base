import express from 'express';
import passport from 'passport';
import connectEnsureLogin from 'connect-ensure-login';
const router = express.Router();

import User from '../app/models/user.js';
import HomeController from '../app/controllers/home.js';
import PostController from '../app/controllers/post.js';

router.use(passport.initialize());
router.use(passport.session());
passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

router.use(function(req, res, next){
    res.locals.user = req.user;
    next();
});

// index page
router.get('/', HomeController.index);

// about page
router.get('/about', HomeController.about);

// login page
router.get('/login', HomeController.login);
router.post('/login', passport.authenticate('local', { failureRedirect: '/?login=false' }),  function(req, res) {
	res.redirect('/?login=true');
});

// logout
router.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/login');
});

// create post page
router.get('/post', connectEnsureLogin.ensureLoggedIn(), PostController.index);
router.get('/post/create', connectEnsureLogin.ensureLoggedIn(), PostController.create);
router.post('/post/create', connectEnsureLogin.ensureLoggedIn(), PostController.create);

export default router;