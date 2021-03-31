const MainPageBodyAd = ({ ad }: any) => {
  return (
    <>
      {ad && (
        <div className="MainPageOneAd">
          <div className="MainPageOneAd-Top">sponsored</div>
          <div className="MainPageOneAd-Middle">
            <img
              className="MainPageOneAd-Middle-Img"
              src={`https://cdn.comento.kr/assignment/${ad.img}`}
              alt="광고이미지"
            ></img>
            <div className="MainPageOneAd-Middle-TextBox">
              <p className="MainPageOneAd-Middle-TextBox-Title">{ad.title}</p>
              <p className="MainPageOneAd-Middle-TextBox-Desc">{ad.contents}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MainPageBodyAd;
