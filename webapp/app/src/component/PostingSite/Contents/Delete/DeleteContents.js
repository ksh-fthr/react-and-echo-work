import { Link, useParams } from 'react-router-dom'

const DeleteContents = () => {
  // これだけで URL パラメータから値を取得できる
  const params = useParams()

  const deleteContents = () => {
    console.dir({
      contentId: params.contentId,
      title: params.title
    })
  }

  return (
    <div className="content-wrapper">
      <h2 className="headline">Contents</h2>
      <div className="breadcrumb-list">
        <ol>
          <li>ポスティングサイト</li>
          <li>コンテンツ</li>
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
        <div className="contents-header">
          <h3>コンテンツ削除</h3>
        </div>
        <div className="contents-body">
          ID: {params.contentId}, タイトル: {params.title} を削除します
        </div>
        <div className="contents-footer">
          <button type="button" onClick={deleteContents}>
            送信
          </button>
        </div>
      </div>
    </div>
  )
}
export default DeleteContents
