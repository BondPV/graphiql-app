import JsonView from 'react18-json-view';
import '../../theme/styleViewer.css';

const JSON = {
  data: {
    name: 'RS',
  },
};

const ResponseViewer = (): JSX.Element => {
  return (
    <div>
      <JsonView src={JSON} />;
    </div>
  );
};

export { ResponseViewer };
