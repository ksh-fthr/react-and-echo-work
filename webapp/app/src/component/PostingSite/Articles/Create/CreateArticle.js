import { Link, useParams } from 'react-router-dom'
import { useState } from 'react'
import useFetch from 'use-http'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'

const CreateArticle = () => {
  // これだけで URL パラメータから値を取得できる
  const params = useParams()

  // API コール
  const { post, response } = useFetch(
    'http://127.0.0.1:3000/api'
  )

  /**
   * API の戻り値で取得したデータを setForm を介して既存情報をフォーム上に設定する
   */
  const setFormData = (article) => {
    setForm({
      subtitle: article.subtitle,
      body: article.body,
      remarks: article.remarks
    })
  }

  /**
   * React Hook によるフォームの管理.
   */
  const [form, setForm] = useState({
    subtitle: '',
    body: '',
    remarks: ''
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
  const postArticle = async () => {
    const postData = {
      contentId: params.contentId,
      subtitle: form.subtitle,
      body: form.body,
      remarks: form.remarks
    }

    const content = await post(`/contents/${params.contentId}/article`, postData)
    if (response.ok) {
      setFormData(content)
    }
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
          <li>
            <Link to="/postingsite/contents/create">コンテンツ新規作成</Link>
          </li>
        </ul>
      </div>
      <div className="main">
        <div className="article-header">
          <h3>記事新規作成</h3>
        </div>
        <div className="article-body">
          <Box
            component="form"
            sx={{
              '& .MuiTextField-root': { m: 1, width: '125ch' }
            }}
            noValidate
            autoComplete="off"
          >
            <form className="create-contents">
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
          <Button variant="outlined" onClick={postArticle}>送信</Button>
        </div>
      </div>
    </div>
  )
}
export default CreateArticle
