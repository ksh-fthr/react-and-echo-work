import { Link } from 'react-router-dom'
import { useState } from 'react'

const CreateContents = () => {
  const [form, setForm] = useState({
    title: '',
    author: '',
    summary: ''
  })

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const createContents = () => {
    console.dir({
      title: form.title,
      author: form.author,
      summary: form.summary
    })
  }

  return (
    <div className="content-wrapper">
      <h2 className="headline">Contents</h2>
      <div className="breadcrumb-list">
        <ol>
          <li>ポスティングサイト</li>
          <li>コンテンツ</li>
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
        <div className="contents-header">
          <h3>コンテンツ新規作成</h3>
        </div>
        <div className="contents-body">
          <form className="create-contents">
            <div className="contents-title">
              <label className="form-label">タイトル:</label>
              <input
                id="title"
                name="title"
                type="text"
                onChange={handleChange}
                value={form.title}
              />
            </div>
            <div className="contents-author">
              <label className="form-label">作者:</label>
              <input
                id="author"
                name="author"
                type="text"
                onChange={handleChange}
                value={form.author}
              />
            </div>
            <div className="contents-summary">
              <label className="form-label">要約:</label>
              <textarea
                id="summary"
                name="summary"
                onChange={handleChange}
                value={form.summary}
              />
            </div>
          </form>
        </div>
        <div className="contents-footer">
          <button type="button" onClick={createContents}>
            送信
          </button>
        </div>
      </div>
    </div>
  )
}
export default CreateContents
