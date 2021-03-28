import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  ContentsWorkerStart,
  AdContentsWorkerStart,
} from '../../store/actions/contentAction';
import { pageIncrement } from '../../store/actions/pageAction';
import { RootState } from '../../store/reducer';
import MainPageController from './MainPageController';
import MainPageContents from './MainPageContents';
import MainPageBodyAd from './MainPageBodyAd';
import { useScrollEnd } from '../../util/useScrollEnd';

const MainPageBodyCenter = () => {
  const dispatch = useDispatch();
  const isEnd = useScrollEnd();
  const pageNow = useSelector((state: RootState) => state.pageStatus.pageNow);

  const [isBottom, setIsBottom] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);

  if (isEnd) {
    // setPage(page + 1);
    console.log('hi');
    dispatch(pageIncrement());
    console.log(pageNow);
  }

  useEffect(() => {
    dispatch(AdContentsWorkerStart());
    dispatch(ContentsWorkerStart('asc'));
    console.log(isBottom);
  }, [isBottom]);

  const contentsNow =
    useSelector((state: RootState) => state.contentsStatus.contentsNow) || [];

  const allAd =
    useSelector((state: RootState) => state.contentsStatus.AllAd) || [];

  return (
    <div className="MainPageBodyCenter-Container">
      <MainPageController />
      {contentsNow.map((content: any, index: number) => {
        index += 1;
        return (
          <>
            <MainPageContents key={index} content={content} />
            {index % 3 === 0 && index !== 0 ? (
              <MainPageBodyAd ad={allAd[index / 3]} />
            ) : null}
          </>
        );
      })}
    </div>
  );
};

export default MainPageBodyCenter;
