import express from 'express';
import session from 'express-session';
import bodyParser from 'body-parser';
import passport from 'passport';
import router from './config/routes.js';
import config from './config/config.js';
import * as mongoose from './config/mongoose.js';
import User from './app/models/user.js';

const app = express();
const PORT = config.port || 8000;

app.use(session({
    secret: config.session_config || "3Xp12e5$",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60 * 60 * 1000 } // 1 hour
}));

app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(passport.initialize());
app.use(passport.session());
passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use('/', router);

const boot = app.listen(PORT, () => {
    mongoose.init();
    console.log(`Server is listening on port ${PORT}`);
});

export {boot};