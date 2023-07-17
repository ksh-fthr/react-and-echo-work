import { Link } from 'react-router-dom';

const EditContents = () => {

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
        <li><Link to='/contents/delete'>削除</Link></li>
      </ul>
      <div>
        Edit Contents
      </div>
    </div>
  );
};
export default EditContents;

