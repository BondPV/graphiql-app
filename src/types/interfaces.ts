// example
interface IExample {
  id: number;
}

interface ILoginForm {
  email: string;
  password: string;
  repeatPassword?: string;
}

export type { ILoginForm, IExample };
