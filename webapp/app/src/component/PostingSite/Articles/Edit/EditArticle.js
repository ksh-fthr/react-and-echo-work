import { Link, useParams } from 'react-router-dom'
import { useState, useEffect, useCallback } from 'react'
import useFetch from 'use-http'

import { MockArticle } from '../../../../mock/MockArticle'
import { ArticleModel } from '../../../../service/Contents/Article'

import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'

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
    let article = null
    if (
      MockArticle.article.id !== Number(params.articleId) ||
      MockArticle.article.contentId !== Number(params.contentId)
    ) {
      throw new Error('編集対象のデータがありません')
    }

    article = new ArticleModel(MockArticle.article)

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

  const putArticle = () => {
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
          <Box
            component="form"
            sx={{
              '& .MuiTextField-root': { m: 1, width: '125ch' }
            }}
            noValidate
            autoComplete="off"
          >
            <form className="edit-article">
              <div className="article-subtitle">
                <TextField
                  label="サブタイトル"
                  variant="outlined"
                  id="subtitle"
                  name="subtitle"
                  onChange={handleChange}
                  value={form.subtitle}
                />
              </div>
              <div className="article-body">
                <TextField
                  label="本文"
                  variant="outlined"
                  id="body"
                  name="body"
                  onChange={handleChange}
                  value={form.body}
                  multiline
                  rows={16}
                />
              </div>
              <div className="article-remarks">
                <TextField
                  label="備考"
                  variant="outlined"
                  id="remarks"
                  name="remarks"
                  onChange={handleChange}
                  value={form.remarks}
                />
              </div>
            </form>
          </Box>
        </div>
        <div className="article-footer">
          <Button variant="outlined" onClick={putArticle}>送信</Button>
        </div>
      </div>
    </div>
  )
}
export default EditArticle
