import express, {Request, Response} from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response) => {
  res.json('Hello world');
});

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
