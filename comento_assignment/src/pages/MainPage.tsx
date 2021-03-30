import Header from '../components/head/Header';
import MainPageBody from '../components/MainPage/MainPageBody';
import FilterModal from '../components/Modal/filterModal';

const MainPage = () => {
  return (
    <>
      <div className="MainPage-Container">
        <FilterModal />
        <Header />
        <MainPageBody />
      </div>
    </>
  );
};

export default MainPage;
