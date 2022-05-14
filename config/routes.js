import express from 'express';
const router = express.Router();
import HomeController from '../app/controllers/home.js';

// index page
router.get('/', HomeController.index);

// about page
router.get('/about', HomeController.about);

export default router;