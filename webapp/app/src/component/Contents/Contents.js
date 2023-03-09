import React, { useState, useCallback } from 'react';
import useFetch from 'use-http'
import { Link } from 'react-router-dom';

const Content = () => {
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

  return (
    <div className="content-index">
      <h2>Contents</h2>
      <div>
        コンテンツ一覧
      </div>
      <ul>
        <li><Link to='/contents/create'>新規作成</Link></li>
        <li><Link to='/contents/view'>閲覧</Link></li>
        <li><Link to='/contents/edit'>編集</Link></li>
        <li><Link to='/contents/delete'>削除</Link></li>
      </ul>
      <div>
        {error && 'Error!'}
        {loading && 'Loading...'}
        {contents}
      </div>
    </div>
  );
};
export default Content;

