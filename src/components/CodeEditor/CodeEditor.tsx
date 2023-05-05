import { useCallback } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { codeEditorTheme } from '../../theme/themeCodeEditor';

const extensions = [javascript({ jsx: true })];

const defaultQuery = `query GetData {
  ...param
}`;

const CodeEditor = (): JSX.Element => {
  const onChange = useCallback((value: string) => {
    console.log('value:', value);
  }, []);

  return (
    <div>
      <CodeMirror
        value={defaultQuery}
        height="auto"
        theme={codeEditorTheme}
        extensions={extensions}
        onChange={onChange}
      />
    </div>
  );
};

export { CodeEditor };
