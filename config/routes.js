import express from 'express';
const router = express.Router();

import HomeController from '../app/controllers/home.js';
import PostController from '../app/controllers/post.js';

// index page
router.get('/', HomeController.index);

// about page
router.get('/about', HomeController.about);

// create post page
router.get('/post', PostController.index);
router.get('/post/create', PostController.create);
router.post('/post/create', PostController.create);

export default router;