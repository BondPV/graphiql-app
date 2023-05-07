// example
interface IExample {
  id: number;
}

interface ILoginForm {
  email: string;
  password: string;
  repeatPassword?: string;
}

interface ConstantTranslationFunction {
  [key: string]: string;
}

export type { ILoginForm, IExample, ConstantTranslationFunction };
