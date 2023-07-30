import { Link } from 'react-router-dom';

const DeleteContents = () => {

  return (
    <div className="content-wrapper">
      <h2 className="headline">Contents</h2>
      <div className="breadcrumb-list">
        <ol>
          <li>コンテンツ</li>
          <li>削除</li>
        </ol>
      </div>
      <div className="sidebar">
        <ul>
          <li><Link to='/contents'>コンテンツTOP</Link></li>
          <li><Link to='/contents/list'>一覧</Link></li>
          <li><Link to='/contents/create'>新規作成</Link></li>
        </ul>
      </div>
      <div className="main">
        Delete Contents
      </div>
    </div>
  );
};
export default DeleteContents;



