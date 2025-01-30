import express, {Request, Response} from 'express';
import 'dotenv/config';
import sql from './config/db';

const app = express();
const PORT = process.env.PORT || 3000;
app.get('/', (req: Request, res: Response) => {
  res.json('Hello world');
});

app.get('/db-version', async (req: Request, res: Response) => {
  try {
    const result = await sql`SELECT version()`;
    res.json({version: result[0].version});
  } catch (error) {
    console.error('Database error:', error);
    res.status(500).json({error: 'Internal Server Error'});
  }
});

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
