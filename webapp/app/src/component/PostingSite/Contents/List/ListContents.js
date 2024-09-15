import { useState, useEffect, useCallback, useReducer } from 'react'
import useFetch from 'use-http'
import { Link } from 'react-router-dom'
import {
  contentsReducer,
  initialContentsState
} from '../../../../reducer/PostingSite/ContentsReducer'

import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'

const ListContents = () => {
  const [contents, setContents] = useState([])

  // Reducerを呼び出す
  const [state, dispatch] = useReducer(contentsReducer, initialContentsState)
  const { get, response, loading, error } = useFetch(
    'http://127.0.0.1:3000/api'
  )

  /**
   * コンテンツ取得 API の呼び出し( ID 指定なし )
   */
  const getAllContents = useCallback(async () => {
    const contents = await get('/contents')
    if (response.ok) {
      setContents(contents)
    }
    setContents(contents)
    dispatch({ state, type: 'add_contents', payload: contents })
  }, [get, response])

  // useEffectの実行されるタイミング
  // * 第二引数を指定しない場合、副作用は全レンダリング後に実行
  // * 第二引数を指定した場合、配列に格納された値が変更された場合のみ実行
  useEffect(() => {
    // 副作用として実行される処理
    getAllContents()
  }, [getAllContents])

  return (
    <div className="contents-wrapper">
      <h2 className="headline">Contents</h2>
      <div className="breadcrumb-list">
        <ol>
          <li>ポスティングサイト</li>
          <li>コンテンツ</li>
          <li>一覧</li>
        </ol>
      </div>
      <div className="sidebar">
        <ul>
          <li>
            <Link to="/postingsite">TOP</Link>
          </li>
          <li className="disable-link">コンテンツ一覧</li>
          <li>
            <Link to="/postingsite/contents/create">コンテンツ新規作成</Link>
          </li>
        </ul>
      </div>
      <div className="main">
        <h3>コンテンツ一覧</h3>
        {error && 'Error!'}
        {loading && 'Loading...'}
        <Paper style={{ width: '100%' }}>
          <TableContainer sx={{ maxHeight: 'calc(75vh - 28px)' }}>
            <Table stickyHeader aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="right">ID</TableCell>
                  <TableCell align="left">タイトル</TableCell>
                  <TableCell align="left">サマリ</TableCell>
                  <TableCell align="left">著者</TableCell>
                  <TableCell align="left" sx={{ width: '50px' }}>作成日</TableCell>
                  <TableCell align="left" sx={{ width: '50px' }}>更新日</TableCell>
                  <TableCell align="center" sx={{ width: '20px' }}></TableCell>
                  <TableCell align="center" sx={{ width: '20px' }}></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {contents.map((content) => (
                  <TableRow
                    key={content.d}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row" align="right">
                      {content.id}
                    </TableCell>
                    <TableCell align="left">
                      <Link
                        to={`/postingsite/contents/${content.id}/article/list`}
                      >
                        {content.title}
                      </Link>
                    </TableCell>
                    <TableCell align="left">{content.summary}</TableCell>
                    <TableCell align="left">{content.author}</TableCell>
                    <TableCell align="left">{content.createdAt}</TableCell>
                    <TableCell align="left">{content.updatedAt}</TableCell>
                    <TableCell align="center">
                      <Button
                        variant="outlined"
                        href={`/postingsite/contents/${content.id}/edit`}
                      >
                        編集
                      </Button>
                    </TableCell>
                    <TableCell align="center">
                      <Button
                        variant="outlined"
                        href={`/postingsite/contents/${content.id}/${content.title}/delete`}
                      >
                        削除
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </div>
    </div>
  )
}
export default ListContents
