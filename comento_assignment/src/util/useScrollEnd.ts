import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { pageIncrement } from '../store/actions/pageAction';
import { RootState } from '../store/reducer'
import { nextContentWorkerStart } from '../store/actions/contentAction'
export const useScrollEnd = () => {
  const [isEnd, setIsEnd] = useState(false);
  const [ pageNum, setPageNum ] = useState(1);
  const dispatch = useDispatch()

  const modeNow = useSelector((state : RootState) => state.pageStatus.ascOrDesc)

  const onScroll = () => {
    if (
      document.documentElement.scrollTop +
        document.documentElement.clientHeight ===
      document.documentElement.scrollHeight
    ) {
      setPageNum((pageNum) => pageNum + 1)
      setIsEnd(true);
      dispatch(pageIncrement())
      dispatch(nextContentWorkerStart(pageNum + 1, modeNow))
    } else {
      setIsEnd(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [pageNum]);
  return {isEnd, pageNum};
};