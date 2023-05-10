// example
interface IExample {
  id: number;
}

interface ILoginForm {
  email: string;
  password: string;
  repeatPassword?: string;
}

interface IConstantTranslationFunc {
  [key: string]: string;
}

interface IEditorRequest {
  query: string;
  variables: string;
  headers: string;
}

export type { ILoginForm, IExample, IConstantTranslationFunc, IEditorRequest };
