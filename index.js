import express from 'express';
import path from 'path';
import {router as indexRoutes} from './routes/indexRoutes.js';
import bodyParser from 'body-parser';

export const moduleUrl = new URL(import.meta.url);
export const __dirname = path.dirname(moduleUrl.hostname);

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine','pug');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const PORT = process.env.PORT || 8000;


app.use('/',indexRoutes);


app.listen(PORT,() => {
    console.log(`Server listening on port ${PORT}`);
});