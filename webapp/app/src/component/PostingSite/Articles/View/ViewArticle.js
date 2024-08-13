import { Link } from 'react-router-dom'
import { MockArticle } from '../../../../mock/MockArticle'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'

const subtitle = MockArticle.article.subtitle
const article = MockArticle.article.body

const ViewArticle = () => {
  return (
    <div className="article-wrapper">
      <h2 className="headline">Articles</h2>
      <div className="breadcrumb-list">
        <ol>
          <li>ポスティングサイト</li>
          <li>コンテンツ</li>
          <li>記事</li>
          <li>閲覧</li>
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
          <h3>{subtitle}</h3>
        </div>
        <div className="article-body">
          <article className="article">
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
                  padding: '20px'
                }}
                className="article"
              >
                {article}
              </Paper>
            </Box>
          </article>
        </div>
      </div>
    </div>
  )
}
export default ViewArticle
