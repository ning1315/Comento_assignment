import { useSelector } from 'react-redux';
import { RootState } from '../../store/reducer';
import { useHistory } from 'react-router';

const MainPageContents = ({ content }: any) => {
  const history = useHistory();
  const category = useSelector((state: RootState) =>
    state.pageStatus.allCategory.filter(
      (cate: any) => cate.id === content.category_id,
    ),
  );

  const onClickContent = (id: number) => {
    history.push(`/view/${id}`);
  };

  return (
    <>
      {content && (
        <div
          className="MainPageOneContents"
          onClick={() => onClickContent(content.id)}
        >
          <div className="MainPageOneContents-Top">
            <div className="MainPageOneContents-Cate">{category[0].name}</div>
            <div className="MainPageOneContents-Id">No {content.id}</div>
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
