const MainPageController = () => {
  return (
    <div className="MainPageController-Container">
      <div className="Controll-UpDown-div">
        <div className="Controll-Up-div">
          <div className="Controll-Point-Up-Down"></div>
          <div className="Controll-Text-Up-Down">오름차순</div>
        </div>
        <div className="Controll-Down-div">
          <div className="Controll-Point-Up-Down"></div>
          <div className="Controll-Text-Up-Down">내림차순</div>
        </div>
      </div>
      <div className="Controll-Filter">
        <button className="Controll-Filter-Btn">
          <div className="Controll-Filter-Btn-Text">필터</div>
        </button>
      </div>
    </div>
  );
};

export default MainPageController;
