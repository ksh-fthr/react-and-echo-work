import { Link, useParams } from 'react-router-dom'
import { useState, useEffect, useCallback } from 'react'
import useFetch from 'use-http'

import { MockArticle } from '../../../../mock/MockArticle'
import { ArticleModel } from '../../../../service/Contents/Article'

const EditArticle = () => {
  // これだけで URL パラメータから値を取得できる
  const params = useParams()

  // API コール
  const { get, response, loading, error } = useFetch(
    'http://127.0.0.1:3000/api'
  )
  /**
   * 記事取得 API の呼び出し( ID 指定あり )
   */
  const getArticleById = useCallback(async () => {
    // TODO: API 疎通ができたらこの部分は有効化する.
    // const content = await get('/article/:id');
    // if (response.ok) {
    //   setContent(content);
    // }
    console.dir(params)
    console.dir(MockArticle.article)
    let article = null
    if (
      MockArticle.article.id !== Number(params.articleId) ||
      MockArticle.article.contentId !== Number(params.contentId)
    ) {
      console.dir({
        matchArticleId: MockArticle.article.id === Number(params.articleId),
        matchContentId:
          MockArticle.article.contentId === Number(params.contentId)
      })
      throw new Error('編集対象のデータがありません')
    }

    article = new ArticleModel(MockArticle.article)
    console.dir(article)

    // setForm を介して既存情報をフォーム上に設定する
    setForm({
      subtitle: article.subtitle,
      body: article.body,
      remarks: article.remarks
    })
  }, [get, response])

  // useEffectの実行されるタイミング
  // * 第二引数を指定しない場合、副作用は全レンダリング後に実行
  // * 第二引数を指定した場合、配列に格納された値が変更された場合のみ実行
  useEffect(() => {
    // 副作用として実行される処理
    getArticleById()
  }, [getArticleById])

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

  const editArticle = () => {
    console.dir({
      id: params.id,
      contentId: params.contentId,
      subtitle: form.subtitle,
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
        <div className="article-header">
          <h3>記事編集</h3>
        </div>
        {error && 'Error!'}
        {loading && 'Loading...'}
        <div className="article-body">
          <form className="edit-article">
            <div className="article-subtitle">
              <label className="form-label">サブタイトル:</label>
              <input
                id="subtitle"
                name="subtitle"
                type="text"
                onChange={handleChange}
                value={form.subtitle}
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
          <button type="button" onClick={editArticle}>
            送信
          </button>
        </div>
      </div>
    </div>
  )
}
export default EditArticle
