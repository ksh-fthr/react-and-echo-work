import { Link } from 'react-router-dom';

const ListContents = () => {

  return (
    <div className="content-wrapper">
      <h2 className="headline">Contents</h2>
      <div className="breadcrumb-list">
        <ol>
          <li>コンテンツ</li>
          <li>一覧</li>
        </ol>
      </div>
      <div className="sidebar">
        <ul>
          <li><Link to='/contents'>コンテンツTOP</Link></li>
          <li className="disable-link">一覧</li>
          <li><Link to='/contents/create'>新規作成</Link></li>
          <li><Link to='/contents/view'>閲覧</Link></li>
          <li><Link to='/contents/edit'>編集</Link></li>
          <li><Link to='/contents/delete'>削除</Link></li>
        </ul>
      </div>
      <div className="main">
        List Contents
      </div>
    </div>
  );
};
export default ListContents;


