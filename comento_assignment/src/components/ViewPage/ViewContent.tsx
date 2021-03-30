import { useEffect } from 'react';

const ViewContent = ({ view }: any) => {
  return (
    <>
      {view && (
        <div className="ViewContent-Container">
          <div className="ViewContent-Title">{view.title}</div>
          <div className="ViewContent-Desc">{view.contents}</div>
          <div className="ViewContent-Date">
            {new Date(view.created_at).toLocaleDateString().slice(0, -1)}
          </div>
        </div>
      )}
    </>
  );
};

export default ViewContent;
