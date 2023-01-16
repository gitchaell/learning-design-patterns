import express, { Express, Request, Response } from 'express';
import path from 'path';

const app: Express = express();

app.get('/', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, '../docs/index.html'));
});

app.get('/1-abstract-factory', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, '../docs/1-abstract-factory/index.html'));
});

app.get('/1-abstract-factory/index.clean.js', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, '../docs/1-abstract-factory/index.clean.js'));
});

app.get('/1-abstract-factory/index.smell.js', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, '../docs/1-abstract-factory/index.smell.js'));
});


app.listen(7777, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${7777}`);
});