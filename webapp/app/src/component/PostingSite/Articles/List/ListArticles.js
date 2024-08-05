import { useEffect, useReducer, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { MockArticles } from '../../../../mock/MockArticles'
import {
  contentsReducer,
  currentContentsState
} from '../../../../reducer/PostingSite/ContentsReducer'

import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

const articles = MockArticles.articles

const ListArticles = () => {
  // これだけで URL パラメータから値を取得できる
  const params = useParams()
  const contentId = params.contentId

  // Reducerを呼び出す
  const [state] = useReducer(contentsReducer, currentContentsState)

  const [summary, setSummary] = useState('')

  useEffect(() => {
    const content = state.contents.find((content) => {
      return content.id === Number(contentId)
    })
    setSummary(content.summary)
  }, [state])

  return (
    <div className="article-wrapper">
      <h2 className="headline">Articles</h2>
      <div className="breadcrumb-list">
        <ol>
          <li>ポスティングサイト</li>
          <li>コンテンツ</li>
          <li>記事</li>
          <li>一覧</li>
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
        <h3>記事一覧</h3>
        <div className="article-caption">
          <span className="article-caption-text">{summary}</span>
        </div>
        <Box
          display='flex'
          alignItems='center'
          justifyContent='right'
          component="section"
          sx={{ p: 2 }}
        >
          <Button
            variant="outlined"
            href={`/postingsite/contents/${contentId}/article/create`}
          >
           記事追加
          </Button>
        </Box>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="right">コンテンツID</TableCell>
                <TableCell align="right">記事ID</TableCell>
                <TableCell align="left">サブタイトル</TableCell>
                <TableCell align="left">作成日時</TableCell>
                <TableCell align="left">更新日時</TableCell>
                <TableCell align="center">編集</TableCell>
                <TableCell align="center">削除</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {articles.map((article) => (
                <TableRow
                  key={article.d}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row" align="right">{contentId}</TableCell>
                  <TableCell align="right">{article.id}</TableCell>
                  <TableCell align="left">
                    <Link
                      to={`/postingsite/contents/${contentId}/article/${article.id}/view`}
                    >
                      {article.subtitle}
                    </Link>
                  </TableCell>
                  <TableCell align="left">{article.createdAt}</TableCell>
                  <TableCell align="left">{article.updatedAt}</TableCell>
                  <TableCell align="center">
                    <Link
                      to={`/postingsite/contents/${contentId}/article/${article.id}/edit`}
                    >
                      編集
                    </Link>
                  </TableCell>
                  <TableCell align="center">
                    <Link
                      to={`/postingsite/contents/${contentId}/article/${article.id}/${article.subtitle}/delete`}
                    >
                      削除
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  )
}
export default ListArticles
