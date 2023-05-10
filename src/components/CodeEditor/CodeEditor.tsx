import { useCallback, useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { codeEditorTheme } from '../../theme/themeCodeEditor';
import { Box, Divider, IconButton, Stack, Tab } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { setRequestHeaders, setRequestQuery, setRequestVariables } from '../../redux/slice';

const extensions = [javascript({ jsx: true })];

const CodeEditor = (): JSX.Element => {
  const [tab, setTab] = useState('variables');
  const [showTabContent, setShowTabContent] = useState(true);
  const editorRequest = useAppSelector((state) => state.editorRequest);
  const dispatch = useAppDispatch();

  const onChangeQuery = useCallback(
    (value: string) => {
      dispatch(setRequestQuery(value));
    },
    [dispatch]
  );

  const onChangeVariables = useCallback(
    (value: string) => {
      dispatch(setRequestVariables(value));
    },
    [dispatch]
  );

  const onChangeHeaders = useCallback(
    (value: string) => {
      dispatch(setRequestHeaders(value));
    },
    [dispatch]
  );

  const handleChangeTab = (event: React.SyntheticEvent, tab: string): void => {
    setTab(tab);
  };

  const handleShowTabContent = (element: string): void => {
    if (element === 'tab') {
      setShowTabContent(false);
    }

    if (element === 'arrow') {
      setShowTabContent(!showTabContent);
    }
  };

  return (
    <Stack direction={'column'} sx={{ height: { xs: 'auto', md: '75vh' } }}>
      <Box aria-label="query" height="100%" overflow={'auto'}>
        <CodeMirror
          value={editorRequest.query}
          height="100%"
          theme={codeEditorTheme}
          extensions={extensions}
          onChange={onChangeQuery}
        />
      </Box>
      <Divider sx={{ height: '1rem' }} />
      <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={tab}>
          <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
            <TabList onChange={handleChangeTab} onClick={(): void => handleShowTabContent('tab')}>
              <Tab label="Variables" value="variables" sx={{ textTransform: 'none' }} />
              <Tab label="Headers" value="headers" sx={{ textTransform: 'none' }} />
            </TabList>
            <Box onClick={(): void => handleShowTabContent('arrow')}>
              <IconButton>{!showTabContent ? <ExpandMoreIcon /> : <ExpandLessIcon />}</IconButton>
            </Box>
          </Stack>
          <Box hidden={showTabContent} height={'150px'} overflow={'auto'}>
            <TabPanel value="variables" sx={{ padding: '1rem 0' }}>
              <CodeMirror
                value={editorRequest.variables}
                height="100%"
                theme={codeEditorTheme}
                extensions={extensions}
                onChange={onChangeVariables}
              />
            </TabPanel>
            <TabPanel value="headers" sx={{ padding: '1rem 0' }}>
              <CodeMirror
                value={editorRequest.headers}
                height="100%"
                theme={codeEditorTheme}
                extensions={extensions}
                onChange={onChangeHeaders}
              />
            </TabPanel>
          </Box>
        </TabContext>
      </Box>
    </Stack>
  );
};

export { CodeEditor };
