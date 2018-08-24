import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import questionRoute from './routes/questionRoute';

const port = parseInt(process.env.PORT, 10) || 8000;
const app = express();

app.use(logger('dev'));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/v1/', questionRoute);

app.set('port', port);

app.listen(port, () => console.log('server running at port', port));


export default app;
