import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/reducer';
import { filterContentWorkerStart } from '../../store/actions/contentAction';
import {
  filterModalClose,
  pickedFilter,
  changeToPick,
  changeToUnPick,
  resetPage,
} from '../../store/actions/pageAction';
import { categoryType } from '../../module/category/categoryType';
import cancelBtn from '../../svg/그룹 560.svg';

const FilterModal = () => {
  const dispatch = useDispatch();

  const [picked, setPicked] = useState<categoryType[]>([]);
  const isOpen = useSelector(
    (state: RootState) => state.pageStatus.filterModal,
  );

  const AllCate = useSelector(
    (state: RootState) => state.pageStatus.allCategory,
  );

  const isSelected = useSelector(
    (state: RootState) => state.pageStatus.isSelected,
  );

  const selectedCate = useSelector(
    (state: RootState) => state.pageStatus.selectedCategory,
  );

  const modeNow = useSelector((state: RootState) => state.pageStatus.ascOrDesc);

  const closeModal = () => {
    dispatch(filterModalClose());
  };

  const savePicked = (category: categoryType, e: any) => {
    if (e.target.checked) {
      dispatch(changeToPick(category));
    } else if (!e.target.checked) {
      dispatch(changeToUnPick(category));
    }
  };

  const savePickedCate = () => {
    if (selectedCate.length === 0) {
      return;
    }

    localStorage.setItem('Filter', JSON.stringify(selectedCate));
    dispatch(resetPage());
    dispatch(pickedFilter(selectedCate));
    dispatch(filterContentWorkerStart(selectedCate, modeNow));
    closeModal();
  };

  return (
    <>
      {isOpen ? (
        <div className="outterFilterModal" onClick={closeModal}>
          <div
            className="innerFilterModal"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <div className="contentsFilterModal">
              <img
                src={cancelBtn}
                alt="cancelIMG"
                className="Cancle-FilterModal"
                onClick={closeModal}
              />
              <div className="Title-FilterModal">필터</div>
              {AllCate.map((category: categoryType) => (
                <div
                  className="oneFilterCheck"
                  onClick={(e) => savePicked(category, e)}
                >
                  <label className="filterCheck-label">
                    <input
                      className="filterCheck"
                      type="checkbox"
                      defaultChecked={isSelected[category.id]}
                    />
                    {category.name}
                  </label>
                </div>
              ))}
              <div className="Bottom-FilterModal">
                <button className="Btn-FilterModal" onClick={savePickedCate}>
                  <span className="BtnText-FilterModal">저장하기</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default FilterModal;
