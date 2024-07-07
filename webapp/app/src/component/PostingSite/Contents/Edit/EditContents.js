import { Link, useParams } from 'react-router-dom'
import { useState, useEffect, useCallback } from 'react'
import useFetch from 'use-http'

const EditContents = () => {
  // これだけで URL パラメータから値を取得できる
  const params = useParams()

  // API コール
  const { get, put, response, loading, error } = useFetch(
    'http://127.0.0.1:3000/api'
  )

  /**
   * API の戻り値で取得したデータを setForm を介して既存情報をフォーム上に設定す
   */
  const setFormData = (content) => {
    setForm({
      title: content.title,
      author: content.author,
      summary: content.summary
    })
  }

  /**
   * コンテンツ取得 API の呼び出し( ID 指定あり )
   */
  const getContentById = useCallback(async () => {
    const content = await get(`/contents/${params.contentId}`)
    if (response.ok) {
      setFormData(content)
    }
  }, [get, response])

  // useEffectの実行されるタイミング
  // * 第二引数を指定しない場合、副作用は全レンダリング後に実行
  // * 第二引数を指定した場合、配列に格納された値が変更された場合のみ実行
  useEffect(() => {
    // 副作用として実行される処理
    getContentById()
  }, [getContentById])

  /**
   * React Hook によるフォームの管理.
   */
  const [form, setForm] = useState({
    title: '',
    author: '',
    summary: ''
  })

  /**
   * 入力フォームの変更を検知して form の値を更新する.
   */
  const handleChange = (e) => {
    setForm({
      ...form, // スプレッド構文でコピー
      [e.target.name]: e.target.value // 差分を設定する際、プロパティ変数を使用する
    })
  }

  /**
   * 入力フォームの情報をバックエンドに送って更新する.
   */
  const putContents = async () => {
    const putData = {
      title: form.title,
      author: form.author,
      summary: form.summary
    }

    const content = await put(`/contents/${params.contentId}`, putData)
    if (response.ok) {
      setFormData(content)
    }
  }

  return (
    <div className="contents-wrapper">
      <h2 className="headline">Contents</h2>
      <div className="breadcrumb-list">
        <ol>
          <li>ポスティングサイト</li>
          <li>コンテンツ</li>
          <li>編集</li>
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
          <h3>コンテンツ編集</h3>
        </div>
        {error && 'Error!'}
        {loading && 'Loading...'}
        <div className="contents-body">
          <form className="edit-contents">
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
          <button type="button" onClick={putContents}>
            送信
          </button>
        </div>
      </div>
    </div>
  )
}
export default EditContents
