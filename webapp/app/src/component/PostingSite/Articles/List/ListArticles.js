import { useEffect, useReducer, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { MockArticles } from '../../../../mock/MockArticles'
import { contentsReducer, currentContentsState } from '../../../../reducer/PostingSite/ContentsReducer'

const articles = MockArticles.articles

const ListArticles = () => {
  // これだけで URL パラメータから値を取得できる
  const params = useParams()
  const contentId = params.contentId

  // Reducerを呼び出す
  const [state] = useReducer(contentsReducer, currentContentsState)

  const [summary, setSummary] = useState('')

  useEffect(() => {
    // TODO: reducer から取得した値をうまく扱えていないのであとで見直す
    console.dir(state.contents)
    setSummary('hoghoge')
  }, [state])

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
              { summary }
            </span>
            <Link
              className="article-new-create"
              to={`/postingsite/contents/${contentId}/article/create`}
            >
              新規作成
            </Link>
          </caption>
          <thead>
            <tr>
              <th>コンテンツID</th>
              <th>記事ID</th>
              <th>サブタイトル</th>
              <th>作成日時</th>
              <th>更新日時</th>
              <th>編集</th>
              <th>削除</th>
            </tr>
          </thead>
          <tbody>
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
          </tbody>
        </table>
      </div>
    </div>
  )
}
export default ListArticles
