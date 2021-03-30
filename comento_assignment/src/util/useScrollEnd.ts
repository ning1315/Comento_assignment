import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { pageIncrement, categoryWorkerStart } from '../store/actions/pageAction';
import { RootState } from '../store/reducer'
import { nextContentWorkerStart } from '../store/actions/contentAction'
export const useScrollEnd = () => {
  const [isEnd, setIsEnd] = useState(false);
  const [scrollNow, setScrollNow] = useState(0)
  const [ pageNum, setPageNum ] = useState(1);
  const dispatch = useDispatch()

  const modeNow = useSelector((state : RootState) => state.pageStatus.ascOrDesc)

  const pageNow = useSelector((state : RootState) => state.pageStatus.pageNow)

  const selectedCate = useSelector(
    (state: RootState) => state.pageStatus.selectedCategory
  );

  const onScroll = () => {
    if(document.documentElement.scrollTop > 10){
      setScrollNow(document.documentElement.scrollTop)
    }
    if (
      document.documentElement.scrollTop +
        document.documentElement.clientHeight ===
      document.documentElement.scrollHeight
    ) {
      dispatch(pageIncrement())
      setPageNum((pageNum) => pageNum + 1)
      setIsEnd(true);
      console.log(selectedCate)
      dispatch(nextContentWorkerStart(pageNow + 1, modeNow, selectedCate))
    } else {
      setIsEnd(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollNow]);
  return {isEnd, pageNum};
};