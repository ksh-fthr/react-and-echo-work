import { Link } from 'react-router-dom';

const DeleteContents = () => {

  return (
    <div className="content-index">
      <h2>Contents</h2>
      <div>
        コンテンツ一覧
      </div>
      <ul>
        <li><Link to='/contents'>コンテンツ一覧</Link></li>
        <li><Link to='/contents/create'>新規作成</Link></li>
        <li><Link to='/contents/view'>閲覧</Link></li>
        <li><Link to='/contents/edit'>編集</Link></li>
      </ul>
      <div>
        Delete Contents
      </div>
    </div>
  );
};
export default DeleteContents;



