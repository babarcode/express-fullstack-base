import express from 'express';
import router from './config/routes.js';

const app = express();
const PORT = 8080;

app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use('/', router);

app.listen(PORT);
console.log(`Server is listening on port ${PORT}`);