import ViewContent from './ViewContent';
import ViewComments from './ViewComments';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import { RootState } from '../../store/reducer';
import { useDispatch, useSelector } from 'react-redux';
import { viewContentWorkerStart } from '../../store/actions/contentAction';

interface param {
  id: string;
}

const ViewBody = () => {
  const params: param = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(viewContentWorkerStart(Number(params.id)));
  }, []);
  const viewNow = useSelector(
    (state: RootState) => state.contentsStatus.viewContent,
  );
  return (
    <>
      <div className="ViewPageBody-Container">
        <ViewContent view={viewNow} />
        <ViewComments view={viewNow} />
      </div>
    </>
  );
};

export default ViewBody;
