interface UserRequestBody {
  name: string;
  phone: number;
}

interface User {
  id: number;
  name: string;
  phone: number;
  createdAt: Date;
  updatedAt: Date;
}

export {UserRequestBody, User};
