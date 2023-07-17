import { Link } from 'react-router-dom';

const ViewContents = () => {

  return (
    <div className="content-index">
      <h2>Contents</h2>
      <div>
        コンテンツ一覧
      </div>
      <ul>
        <li><Link to='/contents'>コンテンツ一覧</Link></li>
        <li><Link to='/contents/create'>新規作成</Link></li>
        <li><Link to='/contents/edit'>編集</Link></li>
        <li><Link to='/contents/delete'>削除</Link></li>
      </ul>
      <div>
        View Contents
      </div>
    </div>
  );
};
export default ViewContents;

