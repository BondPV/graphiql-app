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

interface IDocumentationSchema {
  data: ISchema;
}

interface ISchema {
  __schema: {
    types: ISchemaType[];
  };
}

interface ISchemaType {
  name: string;
  kind: string;
  description: string;
  fields?: ISchemaTypeField[];
}

interface ISchemaTypeField {
  name: string;
  description: string;
  args?: ISchemaTypeFieldArg[];
  type: {
    name: string;
    kind: string;
  };
}

interface ISchemaTypeFieldArg {
  name: string;
  description: string;
  defaultValue: string;
  type: {
    name: string;
    kind: string;
    ofType: {
      name: string;
      kind: string;
    };
  };
}

export type {
  ILoginForm,
  IConstantTranslationFunc,
  IEditorData,
  IRequestFetch,
  IDocumentationSchema,
  ISchemaType,
};
