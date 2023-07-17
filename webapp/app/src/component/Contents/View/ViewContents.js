import { Link } from 'react-router-dom';

const ViewContents = () => {

  return (
    <div className="content-wrapper">
      <h2>Contents</h2>
      <div>
        <span>コンテンツ</span>
        <span>閲覧</span>
      </div>
      <div className="sidebar">
        <ul>
          <li><Link to='/contents'>一覧</Link></li>
          <li><Link to='/contents/create'>新規作成</Link></li>
          <li className="disable-link">閲覧</li>
          <li><Link to='/contents/edit'>編集</Link></li>
          <li><Link to='/contents/delete'>削除</Link></li>
        </ul>
      </div>
      <div className="main">
        View Contents
      </div>
    </div>
  );
};
export default ViewContents;

