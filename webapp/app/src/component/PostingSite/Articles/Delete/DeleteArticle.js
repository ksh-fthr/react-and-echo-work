import { Link, useParams } from 'react-router-dom'

const DeleteArticle = () => {
  // これだけで URL パラメータから値を取得できる
  const params = useParams()

  const deleteArticle = () => {
    console.dir({
      contentId: params.contentId,
      articleId: params.articleId,
      subtitle: params.subtitle
    })
  }

  return (
    <div className="article-wrapper">
      <h2 className="headline">Article</h2>
      <div className="breadcrumb-list">
        <ol>
          <li>ポスティングサイト</li>
          <li>コンテンツ</li>
          <li>記事</li>
          <li>削除</li>
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
        <div className="article-header">
          <h3>記事削除</h3>
        </div>
        <div className="article-body">
          ID: {params.articleId}, サブタイトル: {params.subtitle} を削除します
        </div>
        <div className="article-footer">
          <button type="button" onClick={deleteArticle}>
            送信
          </button>
        </div>
      </div>
    </div>
  )
}
export default DeleteArticle
