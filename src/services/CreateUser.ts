interface TeachObject {
  title: string;
  experience: number;
}

interface CreateUserData {
  name?: string;
  email: string;
  password: string;
  //teachs: string[] - para quando for um Array simples
  techs: Array<string | TeachObject>;
}

export default function createUser({name, email, password, techs}: CreateUserData) {
  const user = {
    name,
    email,
    password,
    techs,
  }

  return user;
}