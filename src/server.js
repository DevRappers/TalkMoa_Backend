import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';

require('dotenv').config();
const PORT = process.env.PORT || 4000;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(logger('dev'));

app.listen(PORT, () => console.log(`TalkMoa Server Running 🏃 http://localhost:${PORT}`));
