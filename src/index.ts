import bodyParser from 'body-parser';
import express from 'express';
import indexRoutes from './routes/index';

const app = express();

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(indexRoutes);

app.listen(4000, () => {
  console.log('Server on port', 4000);
});
