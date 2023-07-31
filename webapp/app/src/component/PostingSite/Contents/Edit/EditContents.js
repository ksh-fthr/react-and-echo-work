import { Link } from 'react-router-dom';

const EditContents = () => {

  return (
    <div className="content-wrapper">
      <h2 className="headline">Contents</h2>
      <div className="breadcrumb-list">
        <ol>
          <li>ポスティングサイト</li>
          <li>コンテンツ</li>
          <li>編集</li>
        </ol>
      </div>
      <div className="sidebar">
        <ul>
          <li><Link to='/postingsite'>TOP</Link></li>
          <li><Link to='/postingsite/contents/list'>コンテンツ一覧</Link></li>
          <li><Link to='/postingsite/contents/create'>コンテンツ新規作成</Link></li>
        </ul>
      </div>
      <div className="main">
        Edit Contents
      </div>
    </div>
  );
};
export default EditContents;

