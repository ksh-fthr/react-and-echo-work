import { Link } from 'react-router-dom';
import { MockContents } from '../../../mock/MockContents';

const ListContents = () => {

  const contents = MockContents.contents;

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
        <table>
          <tr>
            <th>コンテンツID</th>
            <th>タイトル</th>
            <th>サマリ</th>
            <th>著者</th>
            <th>作成日</th>
            <th>更新日</th>
          </tr>
            {
              contents.map((content) => {
                return (
                  <tr>
                    <td>{content.id}</td>
                    <td>{content.title}</td>
                    <td>{content.summary}</td>
                    <td>{content.author}</td>
                    <td>{content.createdAt}</td>
                    <td>{content.updatedAt}</td>
                  </tr>
                )
              })
            }
        </table>
      </div>
    </div>
  );
};
export default ListContents;


