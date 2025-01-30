import {Request, Response, Router} from 'express';
import {createUser, getAllUser} from '../models/user.model';
import {UserRequestBody} from '../types/user.interface';

const userRouter = Router();

userRouter.post('/', async (req: Request, res: Response) => {
  try {
    const {name, phone}: UserRequestBody = req.body;
    const response = await createUser({
      name: String(name),
      phone: Number(phone),
    });
    res.status(201).json(response);
  } catch (error: any) {
    console.log(error);
    res.status(500).json({error});
  }
});

userRouter.get('/', async (req: Request, res: Response) => {
  try {
    const response = await getAllUser();
    res.status(200).json(response);
  } catch (error: any) {
    console.log(error);
    res.status(500).json({error});
  }
});

export {userRouter};
