import { Link } from 'react-router-dom';
import { MockArticles } from '../../../mock/MockArticles';

const contentId = MockArticles.contenttId;
const articles = MockArticles.articles;

const ViewContents = () => {

  return (
    <div className="content-wrapper">
      <h2 className="headline">Contents</h2>
      <div className="breadcrumb-list">
        <ol>
          <li>コンテンツ</li>
          <li>閲覧</li>
        </ol>
      </div>
      <div className="sidebar">
        <ul>
          <li><Link to='/contents'>コンテンツTOP</Link></li>
          <li><Link to='/contents/list'>一覧</Link></li>
          <li><Link to='/contents/create'>新規作成</Link></li>
        </ul>
      </div>
      <div className="main">
        <table>
          <caption>コンテンツのキャプション( content/:id で取得した summary をここに出す )</caption>
          <tr>
            <th>コンテンツID</th>
            <th>記事ID</th>
            <th>サブタイトル</th>
            <th>作成日時</th>
            <th>更新日時</th>
            <th>編集</th>
            <th>削除</th>
          </tr>
          {
            articles.map((article) => {
              return (
                <tr>
                  <td>{contentId}</td>
                  <td>{article.id}</td>
                  <td><Link to='/article/view'>{article.subtitle}</Link></td>
                  <td>{article.createdAt}</td>
                  <td>{article.updatedAt}</td>
                  <td><Link to='/article/edit'>編集</Link></td>
                  <td><Link to='/article/delete'>削除</Link></td>
                </tr>
              )
            })
          }
        </table>
      </div>
    </div>
  );
};
export default ViewContents;

