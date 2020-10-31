import { Request, Response } from 'express';
import createUser from './services/CreateUser';

export function helloWorld(request: Request, response: Response) {
  const user = createUser({
    name: 'Italo Fernandes', 
    email: 'italo@mail.com', 
    password: '123456',
    techs: ['NodeJS', 'ReactJS', { title: 'VueJS', experience: 20}],
  });

  return response.json({ message: 'Hello World' });
}