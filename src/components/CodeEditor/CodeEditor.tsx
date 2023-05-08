import { useCallback } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { codeEditorTheme } from '../../theme/themeCodeEditor';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { setRequest } from '../../redux/slice';

const extensions = [javascript({ jsx: true })];

const CodeEditor = (): JSX.Element => {
  const editorRequest = useAppSelector((state) => state.editorRequest);
  const dispatch = useAppDispatch();

  const onChange = useCallback(
    (value: string) => {
      dispatch(setRequest(value));
    },
    [dispatch]
  );

  return (
    <div>
      <CodeMirror
        value={editorRequest.value}
        height="auto"
        theme={codeEditorTheme}
        extensions={extensions}
        onChange={onChange}
      />
    </div>
  );
};

export { CodeEditor };
