import { Link } from 'react-router-dom';

const DeleteContents = () => {

  return (
    <div className="content-wrapper">
      <h2>Contents</h2>
      <div>
        <span>コンテンツ</span>
        <span>削除</span>
      </div>
      <div className="sidebar">
        <ul>
          <li><Link to='/contents'>コンテンツTOP</Link></li>
          <li><Link to='/contents/list'>一覧</Link></li>
          <li><Link to='/contents/create'>新規作成</Link></li>
          <li><Link to='/contents/view'>閲覧</Link></li>
          <li><Link to='/contents/edit'>編集</Link></li>
          <li className="disable-link">削除</li>
        </ul>
      </div>
      <div className="main">
        Delete Contents
      </div>
    </div>
  );
};
export default DeleteContents;



