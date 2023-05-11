interface ILoginForm {
  email: string;
  password: string;
  repeatPassword?: string;
}

interface IConstantTranslationFunc {
  [key: string]: string;
}

interface IEditorData {
  query: string;
  variables: string;
  headers: string;
}

interface IRequestFetch {
  query: string;
  variables: object;
  headers: object;
}

export type { ILoginForm, IConstantTranslationFunc, IEditorData, IRequestFetch };
