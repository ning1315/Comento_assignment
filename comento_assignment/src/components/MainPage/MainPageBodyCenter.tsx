import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContentsWorkerStart } from '../../store/actions/contentAction';
import { RootState } from '../../store/reducer';
import MainPageController from './MainPageController';
import MainPageContents from './MainPageContents';
import MainPageBodyAd from './MainPageBodyAd';

const MainPageBodyCenter = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(ContentsWorkerStart());
  }, []);

  const contentsStatus =
    useSelector((state: any) => state.contentsStatus.contentsNow) || [];

  return (
    <div className="MainPageBodyCenter-Container">
      <MainPageController />
      <MainPageContents />
      {contentsStatus.length > 0
        ? contentsStatus.map((content: any, index: number) => (
            <MainPageContents content={content} />
          ))
        : null}
      <MainPageBodyAd />
    </div>
  );
};

export default MainPageBodyCenter;
