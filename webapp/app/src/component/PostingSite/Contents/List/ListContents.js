import { useState, useEffect, useCallback } from 'react'
import useFetch from 'use-http'
import { Link } from 'react-router-dom'
import { MockContents } from '../../../../mock/MockContents'
import { ContentsModel } from '../../../../service/Contents/Contents'

const ListContents = () => {
  const [contents, setContents] = useState([])

  const { get, response, loading, error } = useFetch(
    'http://127.0.0.1:3000/api'
  )

  /**
   * コンテンツ取得 API の呼び出し( ID 指定なし )
   */
  const getAllContents = useCallback(async () => {
    // TODO: API 疎通ができたらこの部分は有効化する.
    // const contents = await get('/contents/all');
    // if (response.ok) {
    //   setContents(contents);
    // }
    const contentsModel = new ContentsModel(MockContents.contents)
    setContents(contentsModel.contents)
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
        <table>
          <tr>
            <th>コンテンツID</th>
            <th>タイトル</th>
            <th>サマリ</th>
            <th>著者</th>
            <th>作成日</th>
            <th>更新日</th>
            <th>編集</th>
            <th>削除</th>
          </tr>
          {contents.map((content) => {
            return (
              // See: https://bobbyhadz.com/blog/react-missing-key-prop-for-element-in-iterator
              <tr key={content.id}>
                <td>{content.id}</td>
                <td>
                  <Link to={`/postingsite/contents/${content.id}/article/list`}>
                    {content.title}
                  </Link>
                </td>
                <td>{content.summary}</td>
                <td>{content.author}</td>
                <td>{content.createdAt}</td>
                <td>{content.updatedAt}</td>
                <td>
                  <Link to={`/postingsite/contents/${content.id}/edit`}>
                    編集
                  </Link>
                </td>
                <td>
                  <Link
                    to={`/postingsite/contents/${content.id}/${content.title}/delete`}
                  >
                    削除
                  </Link>
                </td>
              </tr>
            )
          })}
        </table>
      </div>
    </div>
  )
}
export default ListContents
