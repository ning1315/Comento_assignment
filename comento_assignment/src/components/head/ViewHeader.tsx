import { useHistory } from 'react-router';

const ViewHeader = () => {
  const history = useHistory();
  const onClickBack = () => {
    history.push('/');
  };

  return (
    <header className="Header-Container">
      <div className="View-Header-Back">
        <span onClick={onClickBack}>{'<'}</span>
      </div>
    </header>
  );
};

export default ViewHeader;
