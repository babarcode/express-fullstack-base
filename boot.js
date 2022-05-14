import express from 'express';
import bodyParser from 'body-parser';
import router from './config/routes.js';
import config from './config/config.js';
import * as mongoose from './config/mongoose.js';

const app = express();
const PORT = config.port || 8000;

app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', router);

const boot = app.listen(PORT, () => {
    mongoose.init();
    console.log(`Server is listening on port ${PORT}`);
});

export {boot};