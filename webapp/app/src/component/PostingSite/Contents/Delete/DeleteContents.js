import { Link, useParams } from 'react-router-dom'
import { useState, useCallback } from 'react'
import useFetch from 'use-http'

const DeleteContents = () => {
  // これだけで URL パラメータから値を取得できる
  const params = useParams()

  const [contents, setContents] = useState('')

  const { del, response } = useFetch(
    'http://127.0.0.1:3000/api'
  )

  /**
   * ContentId ハックエンドに送ってコンテンツを削除する
   * ContentId は一覧画面で選択されたときに URL パラメータに設定されて渡ってくる
   */
  const deleteContents = useCallback(async () => {
    // TODO: 確認モーダルは別途実装する
    const contents = await del(`/contents/${params.contentId}`)
    if (response.ok) {
      setContents(contents)
    }
  }, [contents, del, response])

  return (
    <div className="contents-wrapper">
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
