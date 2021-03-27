const MainPageContents = ({ content }: any) => {
  return (
    <>
      {content && (
        <div className="MainPageOneContents">
          <div className="MainPageOneContents-Top">
            <div className="MainPageOneContents-Cate">category_name</div>
            <div className="MainPageOneContents-Id">{content.id}</div>
          </div>
          <div className="MainPageOneContents-UnderBar"></div>
          <div className="MainPageOneContents-Info">
            <div className="MainPageOneContents-Info-Id">{content.user_id}</div>
            <div className="MainPageOneContents-Info-SideBar"></div>
            <div className="MainPageOneContents-Info-Date">
              {new Date(content.updated_at).toLocaleDateString().slice(0, -1)}
            </div>
          </div>
          <div className="MainPageOneContents-Title">{content.title}</div>
          <div className="MainPageOneContents-Desc">{content.contents}</div>
        </div>
      )}
    </>
  );
};

export default MainPageContents;
