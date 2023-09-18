import { Link } from 'react-router-dom'
import { MockArticles } from '../../../../mock/MockArticles'

const contentId = MockArticles.contenttId
const articles = MockArticles.articles

const ListArticles = () => {
  return (
    <div className="article-wrapper">
      <h2 className="headline">Articles</h2>
      <div className="breadcrumb-list">
        <ol>
          <li>ポスティングサイト</li>
          <li>コンテンツ</li>
          <li>記事</li>
          <li>一覧</li>
        </ol>
      </div>
      <div className="sidebar">
        <ul>
          <li>
            <Link to="/postingsite">TOP</Link>
          </li>
          <li>
            <Link to="/postingsite/contents/list">コンテンツ一覧</Link>
          </li>
          <li>
            <Link to="/postingsite/contents/create">コンテンツ新規作成</Link>
          </li>
        </ul>
      </div>
      <div className="main">
        <h3>記事一覧</h3>
        <table>
          <caption className="article-caption">
            <span className="article-caption-text">
              コンテンツのキャプション( content/:id で取得した summary
              をここに出す )
            </span>
            <Link
              className="article-new-create"
              to={`/postingsite/contents/${contentId}/article/create`}
            >
              新規作成
            </Link>
          </caption>
          <tr>
            <th>コンテンツID</th>
            <th>記事ID</th>
            <th>サブタイトル</th>
            <th>作成日時</th>
            <th>更新日時</th>
            <th>編集</th>
            <th>削除</th>
          </tr>
          {articles.map((article) => {
            return (
              // See: https://bobbyhadz.com/blog/react-missing-key-prop-for-element-in-iterator
              <tr key={article.id}>
                <td>{contentId}</td>
                <td>{article.id}</td>
                <td>
                  <Link
                    to={`/postingsite/contents/${contentId}/article/${article.id}/view`}
                  >
                    {article.subtitle}
                  </Link>
                </td>
                <td>{article.createdAt}</td>
                <td>{article.updatedAt}</td>
                <td>
                  <Link
                    to={`/postingsite/contents/${contentId}/article/${article.id}/edit`}
                  >
                    編集
                  </Link>
                </td>
                <td>
                  <Link
                    to={`/postingsite/contents/${contentId}/article/${article.id}/${article.subtitle}/delete`}
                  >
                    削除
                  </Link>
                </td>
              </tr>
            )
          })}
        </table>
      </div>
    </div>
  )
}
export default ListArticles
