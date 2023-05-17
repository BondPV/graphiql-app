import { useCallback, useState } from 'react';
import { javascript } from '@codemirror/lang-javascript';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Box, Divider, IconButton, Stack, styled, Tab } from '@mui/material';
import CodeMirror from '@uiw/react-codemirror';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { setRequestHeaders, setRequestQuery, setRequestVariables } from '@/redux/slice';
import { codeEditorTheme } from '@/theme/themeCodeEditor';

const extensions = [javascript({ jsx: true })];

const CssTabList = styled(TabList)({
  '& .MuiTabs-indicator': {
    display: 'none',
  },
});

const CodeEditor = (): JSX.Element => {
  const [tab, setTab] = useState('variables');
  const [showTabContent, setShowTabContent] = useState(false);
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
    <Stack
      direction={'column'}
      height={'100%'}
      sx={{
        maxHeight: { xs: '50vh', md: '100%' },
        fontSize: { xs: '0.9rem', md: '1rem', lg: '1.1rem' },
      }}
    >
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
            <CssTabList
              onChange={handleChangeTab}
              onClick={(): void => handleShowTabContent('tab')}
            >
              <Tab label="Variables" value="variables" sx={{ textTransform: 'none' }} />
              <Tab label="Headers" value="headers" sx={{ textTransform: 'none' }} />
            </CssTabList>
            <Box onClick={(): void => handleShowTabContent('arrow')}>
              <IconButton>{!showTabContent ? <ExpandMoreIcon /> : <ExpandLessIcon />}</IconButton>
            </Box>
          </Stack>
          <Box
            hidden={showTabContent}
            height={'150px'}
            overflow={'auto'}
            sx={{ height: { xs: '70px', md: '150px' } }}
          >
            <TabPanel
              value="variables"
              sx={{
                padding: { xs: '0', sm: '0 0 0.5rem 0', md: '1rem 0' },
                fontSize: { xs: '0.9rem', md: '1rem', lg: '1.1rem' },
              }}
            >
              <CodeMirror
                value={editorRequest.variables}
                height="100%"
                theme={codeEditorTheme}
                extensions={extensions}
                onChange={onChangeVariables}
              />
            </TabPanel>
            <TabPanel
              value="headers"
              sx={{
                padding: { xs: '0', sm: '0 0 0.5rem 0', md: '1rem 0' },
                fontSize: { xs: '0.9rem', md: '1rem', lg: '1.1rem' },
              }}
            >
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
