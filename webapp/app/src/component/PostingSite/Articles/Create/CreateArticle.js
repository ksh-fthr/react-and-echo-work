import { Link, useParams } from 'react-router-dom'
import { useState } from 'react'

const CreateArticle = () => {
  // これだけで URL パラメータから値を取得できる
  const params = useParams()

  const [form, setForm] = useState({
    subtitle: '',
    body: '',
    remarks: ''
  })

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const createArticle = () => {
    console.dir({
      contentId: params.contentId,
      title: form.subtitle,
      body: form.body,
      remarks: form.remarks
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
          <li>新規作成</li>
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
          <li className="disable-link">コンテンツ新規作成</li>
        </ul>
      </div>
      <div className="main">
        <div className="article-header">
          <h3>記事新規作成</h3>
        </div>
        <div className="article-body">
          <form className="create-contents">
            <div className="article-subtitle">
              <label className="form-label">サブタイトル:</label>
              <input
                id="subtitle"
                name="subtitle"
                type="text"
                onChange={handleChange}
                value={form.title}
              />
            </div>
            <div className="article-body">
              <label className="form-label">本文:</label>
              <textarea
                id="body"
                name="body"
                type="text"
                onChange={handleChange}
                value={form.body}
              />
            </div>
            <div className="article-remarks">
              <label className="form-label">備考:</label>
              <textarea
                id="remarks"
                name="remarks"
                onChange={handleChange}
                value={form.remarks}
              />
            </div>
          </form>
        </div>
        <div className="article-footer">
          <button type="button" onClick={createArticle}>
            送信
          </button>
        </div>
      </div>
    </div>
  )
}
export default CreateArticle
