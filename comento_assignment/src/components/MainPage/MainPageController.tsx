import React, { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {
  toAscMode,
  toDescMode,
  filterModalOpen,
} from '../../store/actions/pageAction';
import { ContentsWorkerStart } from '../../store/actions/contentAction';
import { RootState } from '../../store/reducer';

const MainPageController = () => {
  const dispatch = useDispatch();
  const ascOrDesc = useSelector(
    (state: RootState) => state.pageStatus.ascOrDesc,
  );
  const selectedCate = useSelector(
    (state: RootState) => state.pageStatus.selectedCategory,
  );

  const onClickAscDesc = (e: any) => {
    if (e.target.childNodes[0].data === '오름차순') {
      localStorage.setItem('ascDesc', 'asc');
      dispatch(toAscMode());
      dispatch(ContentsWorkerStart('asc', selectedCate));
    } else if (e.target.childNodes[0].data === '내림차순') {
      localStorage.setItem('ascDesc', 'desc');
      dispatch(toDescMode());
      dispatch(ContentsWorkerStart('desc', selectedCate));
    }
  };

  const onClickFilter = () => {
    dispatch(filterModalOpen());
  };

  useEffect(() => {
    let beForeMode = localStorage.getItem('ascDesc');
    if (beForeMode !== null) {
      if (beForeMode === 'asc') {
        dispatch(toAscMode());
      } else if (beForeMode === 'desc') {
        dispatch(toDescMode());
      }
    } else {
      dispatch(toAscMode());
    }
  }, []);

  return (
    <div className="MainPageController-Container">
      <div className="Controll-UpDown-div">
        <div onClick={(e) => onClickAscDesc(e)} className="Controll-Up-div">
          <div
            className="Controll-Point-Up-Down"
            style={
              ascOrDesc === 'asc'
                ? { background: '#00C854' }
                : { background: '#E1E4E7' }
            }
          ></div>
          <div
            className="Controll-Text-Up-Down"
            style={
              ascOrDesc === 'asc' ? { color: '#495057' } : { color: '#ADB5BD' }
            }
          >
            오름차순
          </div>
        </div>
        <div onClick={(e) => onClickAscDesc(e)} className="Controll-Down-div">
          <div
            className="Controll-Point-Up-Down"
            style={
              ascOrDesc === 'desc'
                ? { background: '#00C854' }
                : { background: '#E1E4E7' }
            }
          ></div>
          <div
            className="Controll-Text-Up-Down"
            style={
              ascOrDesc === 'desc' ? { color: '#495057' } : { color: '#ADB5BD' }
            }
          >
            내림차순
          </div>
        </div>
      </div>
      <div className="Controll-Filter">
        <button onClick={onClickFilter} className="Controll-Filter-Btn">
          <div className="Controll-Filter-Btn-Text">필터</div>
        </button>
      </div>
    </div>
  );
};

export default MainPageController;
