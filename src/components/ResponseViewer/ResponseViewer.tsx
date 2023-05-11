import JsonView from 'react18-json-view';
import { useAppSelector } from '../../hooks/redux';
import '../../theme/styleViewer.css';

const ResponseViewer = (): JSX.Element => {
  const editorResponse = useAppSelector((state) => state.editorResponse);

  return (
    <div>
      <JsonView src={editorResponse.value} />;
    </div>
  );
};

export { ResponseViewer };
