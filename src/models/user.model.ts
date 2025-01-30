import sql from '../config/db';
import {User, UserRequestBody} from '../types/user.interface';

const createUser = async ({
  name,
  phone,
}: UserRequestBody): Promise<Record<string, any>> => {
  const result = await sql`
    INSERT INTO users (name, phone)
    VALUES (${name}, ${phone})
    RETURNING *;
  `;
  return result[0]; // Return the first result
};

const getAllUser = async () => {
  const result = await sql`
    SELECT * FROM users;
  `;
  return result;
};

export {createUser, getAllUser};
