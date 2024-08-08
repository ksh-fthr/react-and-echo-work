import { Link, useParams } from 'react-router-dom'
import { useState, useCallback } from 'react'
import useFetch from 'use-http'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'

const DeleteContents = () => {
  // これだけで URL パラメータから値を取得できる
  const params = useParams()

  const [contents, setContents] = useState('')
  const [open, setOpen] = useState(false)

  const { del, response } = useFetch(
    'http://127.0.0.1:3000/api'
  )

  /**
   * ダイアログオープン
   * ------------------------------------------
   * material-ui での alert-dialog の実装
   * https://mui.com/material-ui/react-dialog/
   */
  const handleClickOpen = () => {
    setOpen(true)
    deleteContents()
  }

  /**
   * ダイアログクローズ
   * ------------------------------------------
   * material-ui での alert-dialog の実装
   * https://mui.com/material-ui/react-dialog/
   */
  const handleClose = () => {
    setOpen(false)
  }

  /**
   * ContentId ハックエンドに送ってコンテンツを削除する
   * ContentId は一覧画面で選択されたときに URL パラメータに設定されて渡ってくる
   */
  const deleteContents = useCallback(async () => {
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
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              '& > :not(style)': {
                m: 0,
                width: '100%',
                height: 128
              }
            }}
          >
            <Paper
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              ID: {params.contentId}, タイトル: {params.title} を削除します
            </Paper>
          </Box>
        </div>
        <div className="contents-footer">
          <Button type="button" variant="outlined" onClick={handleClickOpen}>
            送信
          </Button>
        </div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {'指定したコンテンツを削除します'}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              削除すると元には戻せません。よろしいですか？
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>いいえ。削除しません</Button>
            <Button onClick={handleClose} autoFocus>はい。削除します</Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  )
}
export default DeleteContents
