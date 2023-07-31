import React, { useState, useCallback } from 'react';
import useFetch from 'use-http'
import { Link } from 'react-router-dom';
import { MockContents } from '../../../../mock/MockContents';

const ListContents = () => {

  const [
    contents,
    setContents
  ] = useState('');

  const [
    id,
    setId
  ] = useState('');

  const {
    get,
    post,
    put,
    del,
    response,
    loading,
    error
  } = useFetch(
    'http://127.0R0.1:3000/api',
  );

  /**
   * コンテンツ取得 API の呼び出し( ID 指定なし )
   */
  const getAllContents = useCallback(async () => {
    const contents = await get('/contents/all');
    if (response.ok) {
      setContents(contents);
    }
  },
    [
      get,
      response
    ]);


  const mockContents = MockContents.contents;

  return (
    <div className="content-wrapper">
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
          <li><Link to='/postingsite'>TOP</Link></li>
          <li className="disable-link">コンテンツ一覧</li>
          <li><Link to='/postingsite/contents/create'>コンテンツ新規作成</Link></li>
        </ul>
      </div>
      <div className="main">
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
          {
            mockContents.map((content) => {
              return (
                <tr>
                  <td>{content.id}</td>
                  <td><Link to='/postingsite/contents/article/list'>{content.title}</Link></td>
                  <td>{content.summary}</td>
                  <td>{content.author}</td>
                  <td>{content.createdAt}</td>
                  <td>{content.updatedAt}</td>
                  <td><Link to='/postingsite/contents/edit'>編集</Link></td>
                  <td><Link to='/postingsite/contents/delete'>削除</Link></td>
                </tr>
              )
            })
          }
        </table>
      </div>
    </div >
  );
};
export default ListContents;


