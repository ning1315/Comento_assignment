const ViewComments = ({ view }: any) => {
  return (
    <>
      {view && (
        <div className="ViewComments-Container">
          <div className="countComments">
            <div className="TitleCountComments">답변</div>
            <div className="NumberCountComments">{view.reply.length}</div>
          </div>
          {view.reply.map((comment: any) => (
            <div className="oneComment">
              <div className="oneComment-UserName">{comment.user.name}</div>
              <div className="oneComment-UnderBar"></div>
              <div className="oneComment-Desc">{comment.contents}</div>
              <div className="oneComment-Date">
                {new Date(comment.created_at).toLocaleDateString().slice(0, -1)}
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default ViewComments;
