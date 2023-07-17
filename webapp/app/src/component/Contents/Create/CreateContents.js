import { Link } from 'react-router-dom';

const CreateContents = () => {

  return (
    <div className="content-wrapper">
      <h2>Contents</h2>
      <div>
        <span>コンテンツ</span>
        <span>作成</span>
      </div>
      <div className="sidebar">
        <ul>
          <li><Link to='/contents'>一覧</Link></li>
          <li className="disable-link">新規作成</li>
          <li><Link to='/contents/view'>閲覧</Link></li>
          <li><Link to='/contents/edit'>編集</Link></li>
          <li><Link to='/contents/delete'>削除</Link></li>
        </ul>
      </div>
      <div className="main">
        Create Contents
      </div>
    </div>
  );
};
export default CreateContents;

