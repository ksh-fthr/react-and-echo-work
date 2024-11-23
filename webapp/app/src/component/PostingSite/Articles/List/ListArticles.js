import { useState, useEffect, useCallback, useReducer } from 'react'
import useFetch from 'use-http'
import { Link, useParams } from 'react-router-dom'
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

const ListArticles = () => {
    // これだけで URL パラメータから値を取得できる
    const params = useParams()
    const contentId = params.contentId

    const [summary, setSummary] = useState('')
    const [articles, setArticles] = useState([])

    // Reducerを呼び出す
    // コンテンツサマリーは Reducer から取得する
    const [state] = useReducer(contentsReducer, currentContentsState)

    // API 実行のための変数群
    const { get, response, loading, error } = useFetch(
        'http://127.0.0.1:3000/api'
    )

    /**
     * コンテンツサマリーの取得
     *
     * @remarks
     * 描画時のみ実行したいのでuseCalleback の第２引数は空を指定する
     */
    const getSummary = useCallback(async () => {
        // コンテンツの概要取得
        const content = state.contents.find((content) => {
            return content.id === Number(contentId)
        })
        setSummary(content.summary)
    }, [])

    /**
     * 記事一覧取得 API の呼び出し( 記事ID 指定なし )
     *
     * @remarks
     * 描画時のみ実行したいのでuseCalleback の第２引数は空を指定する
     */
    const getArticles = useCallback(async () => {
        const articles = await get(`/contents/${contentId}/articles`)
        if (!response.ok) {
            return
        }
        setArticles(articles)
    }, [])

    // useEffectの実行されるタイミング
    // * 第二引数を指定しない場合、副作用は全レンダリング後に実行
    // * 第二引数を指定した場合、配列に格納された値が変更された場合のみ実行
    useEffect(() => {
        // 副作用として実行される処理
        // コンテンツサマリー取得
        getSummary()

        // 記事一覧取得
        getArticles()
    }, [])

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
                <h3>記事概要</h3>
                <div className="article-caption">
                    <Box
                        sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            '& > :not(style)': {
                                m: 0,
                                width: '100%',
                                height: 80
                            }
                        }}
                    >
                        <Paper
                            sx={{
                                padding: '20px'
                            }}
                            className="article"
                        >
                            <span className="article-caption-text">
                                {summary}
                            </span>
                        </Paper>
                    </Box>
                </div>
                {error && 'Error!'}
                {loading && 'Loading...'}
                <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="right"
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
                <Paper style={{ width: '100%' }}>
                    <TableContainer sx={{ maxHeight: '48vh' }}>
                        <Table stickyHeader aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="right">
                                        コンテンツID
                                    </TableCell>
                                    <TableCell align="right">記事ID</TableCell>
                                    <TableCell align="left">
                                        サブタイトル
                                    </TableCell>
                                    <TableCell align="left">作成日時</TableCell>
                                    <TableCell align="left">更新日時</TableCell>
                                    <TableCell align="center"></TableCell>
                                    <TableCell align="center"></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {articles.map((article) => (
                                    <TableRow
                                        key={article.d}
                                        sx={{
                                            '&:last-child td, &:last-child th':
                                                { border: 0 }
                                        }}
                                    >
                                        <TableCell
                                            component="th"
                                            scope="row"
                                            align="right"
                                        >
                                            {contentId}
                                        </TableCell>
                                        <TableCell align="right">
                                            {article.id}
                                        </TableCell>
                                        <TableCell align="left">
                                            <Link
                                                to={`/postingsite/contents/${contentId}/article/${article.id}/view`}
                                            >
                                                {article.subtitle}
                                            </Link>
                                        </TableCell>
                                        <TableCell align="left">
                                            {article.createdAt}
                                        </TableCell>
                                        <TableCell align="left">
                                            {article.updatedAt}
                                        </TableCell>
                                        <TableCell align="center">
                                            <Button
                                                variant="outlined"
                                                href={`/postingsite/contents/${contentId}/article/${article.id}/edit`}
                                            >
                                                編集
                                            </Button>
                                        </TableCell>
                                        <TableCell align="center">
                                            <Button
                                                variant="outlined"
                                                href={`/postingsite/contents/${contentId}/article/${article.id}/${article.subtitle}/delete`}
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
export default ListArticles
