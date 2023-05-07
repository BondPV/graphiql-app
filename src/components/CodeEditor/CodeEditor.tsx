import { useCallback } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { codeEditorTheme } from '../../theme/themeCodeEditor';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { setRequest } from '../../redux/slice';

const extensions = [javascript({ jsx: true })];

const CodeEditor = (): JSX.Element => {
  const userRequest = useAppSelector((state) => state.userRequest);
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
        value={userRequest.value}
        height="auto"
        theme={codeEditorTheme}
        extensions={extensions}
        onChange={onChange}
      />
    </div>
  );
};

export { CodeEditor };
