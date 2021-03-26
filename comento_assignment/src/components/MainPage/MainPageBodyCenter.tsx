import MainPageController from './MainPageController';
import MainPageContents from './MainPageContents';
import MainPageBodyAd from './MainPageBodyAd';

const MainPageBodyCenter = () => {
  return (
    <div className="MainPageBodyCenter-Container">
      <MainPageController />
      <MainPageContents />
      <MainPageBodyAd />
    </div>
  );
};

export default MainPageBodyCenter;
