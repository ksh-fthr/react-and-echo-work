import { Link } from 'react-router-dom'

const CreateContents = () => {
  return (
    <div className="content-wrapper">
      <h2 className="headline">Contents</h2>
      <div className="breadcrumb-list">
        <ol>
          <li>ポスティングサイト</li>
          <li>コンテンツ</li>
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
          <li className="disable-link">コンテンツ新規作成</li>
        </ul>
      </div>
      <div className="main">
        <h3>コンテンツ新規作成</h3>
      </div>
    </div>
  )
}
export default CreateContents
