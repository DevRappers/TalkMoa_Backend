import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import './env';

require('dotenv').config();
const PORT = process.env.PORT || 4000;

//라우팅 모듈 선언
const indexRouter = require('./routes/index');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(logger('dev'));
//request 요청 URL과 처리 로직을 선언한 라우팅 모듈 매핑
app.use('/', indexRouter);

app.listen(PORT, () => console.log(`TalkMoa Server Running 🏃 http://localhost:${PORT}`));
