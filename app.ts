import express, { Request, Response } from 'express';
import cors from 'cors';
// import routers from './routers/routers';

const app = express();

app.use(cors());
app.use(express.json());
// app.use('/', routers);

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to server routers');
});

export default app;
