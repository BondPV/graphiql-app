import { useCallback } from 'react';
import CodeMirror from '@uiw/react-codemirror';

const CodeEditor = (): JSX.Element => {
  const onChange = useCallback((value: string) => {
    console.log('value:', value);
  }, []);

  return (
    <div>
      <CodeMirror
        value="console.log('hello world!');"
        height="auto"
        theme="light"
        onChange={onChange}
      />
    </div>
  );
};

export { CodeEditor };
