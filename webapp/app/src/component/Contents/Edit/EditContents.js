import { Link } from 'react-router-dom';

const EditContents = () => {

  return (
    <div className="content-wrapper">
      <h2>Contents</h2>
      <div>
        <span>コンテンツ</span>
        <span>編集</span>
      </div>
      <div className="sidebar">
        <ul>
          <li><Link to='/contents'>コンテンツTOP</Link></li>
          <li><Link to='/contents/list'>一覧</Link></li>
          <li><Link to='/contents/create'>新規作成</Link></li>
          <li><Link to='/contents/view'>閲覧</Link></li>
          <li className="disable-link">編集</li>
          <li><Link to='/contents/delete'>削除</Link></li>
        </ul>
      </div>
      <div className="main">
        Edit Contents
      </div>
    </div>
  );
};
export default EditContents;

