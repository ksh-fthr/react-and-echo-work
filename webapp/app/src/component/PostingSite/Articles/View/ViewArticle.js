import { Link } from 'react-router-dom'
import { MockArticle } from '../../../../mock/MockArticle'

const subtitle = MockArticle.article.subtitle
const article = MockArticle.article.body

const ViewArticle = () => {
  return (
    <div className="content-wrapper">
      <h2 className="headline">Articles</h2>
      <div className="breadcrumb-list">
        <ol>
          <li>ポスティングサイト</li>
          <li>コンテンツ</li>
          <li>記事</li>
          <li>閲覧</li>
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
        <h2>{subtitle}</h2>
        <article className="article"> {`${article}`} </article>
      </div>
    </div>
  )
}
export default ViewArticle
