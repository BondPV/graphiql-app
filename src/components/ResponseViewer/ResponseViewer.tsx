import JsonView from 'react18-json-view';
import '../../theme/styleViewer.css';
import { useAppSelector } from '../../hooks/redux';

const ResponseViewer = (): JSX.Element => {
  const editorResponse = useAppSelector((state) => state.editorResponse);

  return (
    <div>
      <JsonView src={editorResponse.value} />;
    </div>
  );
};

export { ResponseViewer };
