import express, { Express, Request, Response } from 'express';
import path from 'path';

const app: Express = express();

app.get('/', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.get('/1-abstract-factory', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, '../public/1-abstract-factory/index.html'));
});

app.listen(7777, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${7777}`);
});