import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  ContentsWorkerStart,
  AdContentsWorkerStart,
} from '../../store/actions/contentAction';
import { RootState } from '../../store/reducer';
import MainPageController from './MainPageController';
import MainPageContents from './MainPageContents';
import MainPageBodyAd from './MainPageBodyAd';

const MainPageBodyCenter = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(AdContentsWorkerStart());
    dispatch(ContentsWorkerStart());
  }, []);

  const contentsNow =
    useSelector((state: RootState) => state.contentsStatus.contentsNow) || [];

  const allAd = useSelector((state: RootState) => state.contentsStatus.AllAd);

  return (
    <div className="MainPageBodyCenter-Container">
      <MainPageController />
      {contentsNow.map((content: any, index: number) => (
        <>
          <MainPageContents key={index} content={content} />
          {index % 3 === 0 ? <MainPageBodyAd ad={allAd[index / 3]} /> : null}
        </>
      ))}
    </div>
  );
};

export default MainPageBodyCenter;
