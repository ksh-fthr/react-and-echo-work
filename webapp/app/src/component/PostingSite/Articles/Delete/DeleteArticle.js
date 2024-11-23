import { Link, useParams } from 'react-router-dom'
import { useState } from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'

const DeleteArticle = () => {
    // これだけで URL パラメータから値を取得できる
    const params = useParams()
    const [open, setOpen] = useState(false)

    /**
     * ダイアログオープン
     * ------------------------------------------
     * material-ui での alert-dialog の実装
     * https://mui.com/material-ui/react-dialog/
     */
    const handleClickOpen = () => {
        setOpen(true)
        deleteArticle()
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

    const deleteArticle = () => {
        console.dir({
            contentId: params.contentId,
            articleId: params.articleId,
            subtitle: params.subtitle
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
                    <li>削除</li>
                </ol>
            </div>
            <div className="sidebar">
                <ul>
                    <li>
                        <Link to="/postingsite">TOP</Link>
                    </li>
                    <li>
                        <Link to="/postingsite/contents/list">
                            コンテンツ一覧
                        </Link>
                    </li>
                    <li>
                        <Link to="/postingsite/contents/create">
                            コンテンツ新規作成
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="main">
                <div className="article-header">
                    <h3>記事削除</h3>
                </div>
                <div className="article-body">
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
                            ID: {params.articleId}, サブタイトル:{' '}
                            {params.subtitle} を削除します
                        </Paper>
                    </Box>
                </div>
                <div className="article-footer">
                    <Button
                        type="button"
                        variant="outlined"
                        onClick={handleClickOpen}
                    >
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
                        <Button onClick={handleClose}>
                            いいえ。削除しません
                        </Button>
                        <Button onClick={handleClose} autoFocus>
                            はい。削除します
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        </div>
    )
}
export default DeleteArticle
