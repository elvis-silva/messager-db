import 'reflect-metadata';
import express from 'express';
import cors from 'cors';
import { router } from './routes';
import './database';

const app = express();
app.use(cors());
const PORT = 8000;
app.use(express.json());
app.use(router);
// app.get('/', (req, res) => res.send('Express + TypeScript Server'));
app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});