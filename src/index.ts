import express, {Request, Response} from 'express';
import 'dotenv/config';
import sql from './config/db';
import {userRouter} from './controllers/user.controller';

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;
app.get('/', (req: Request, res: Response) => {
  res.json('Hello world');
});

app.get('/db-version', async (req: Request, res: Response) => {
  try {
    const result = await sql`SELECT version()`;
    res.json({version: result[0].version});
  } catch (error: any) {
    console.error('Database error:', error);
    res.status(500).json({error: error.NeonDbError});
  }
});

app.use('/user', userRouter);

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
