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
  fields?: ISchemaField[];
  ofType?: ISchemaOfType;
}

interface ISchemaField {
  name: string;
  description: string;
  type: ISchemaType;
  args?: ISchemaArgs[];
}

interface ISchemaArgs {
  name: string;
  description: string;
  defaultValue: string;
  type: ISchemaOfType;
}

interface ISchemaOfType {
  name: string;
  kind: string;
  description: string;
  ofType?: ISchemaOfType;
}

export type {
  ILoginForm,
  IConstantTranslationFunc,
  IEditorData,
  IRequestFetch,
  IDocumentationSchema,
  ISchemaType,
  ISchemaArgs,
  ISchemaOfType,
};
