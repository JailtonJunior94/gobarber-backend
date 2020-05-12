import express from 'express';

import routes from './routes';

const app = express();
const PORT = 8080;
const HOST = '0.0.0.0';

app.use(express.json());
app.use(routes);

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
