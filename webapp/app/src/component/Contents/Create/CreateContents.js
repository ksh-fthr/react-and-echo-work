import { Link } from 'react-router-dom';

const CreateContents = () => {

  return (
    <div className="content-wrapper">
      <h2 className="headline">Contents</h2>
      <div className="breadcrumb-list">
        <ol>
          <li>コンテンツ</li>
          <li>新規作成</li>
        </ol>
      </div>
      <div className="sidebar">
        <ul>
          <li><Link to='/contents'>コンテンツTOP</Link></li>
          <li><Link to='/contents/list'>一覧</Link></li>
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

