import React, { useState, useCallback } from 'react';
import useFetch from 'use-http'
import { Link } from 'react-router-dom';

const PostingSite = () => {
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

  return (
    <div className="content-wrapper">
      <h2 className="headline">PostingSite</h2>
      <div className="breadcrumb-list">
        <ol>
          <li>ポスティングサイト</li>
          <li>TOP</li>
        </ol>
      </div>
      <div className="sidebar">
        <ul>
          <li className="disable-link">TOP</li>
          <li><Link to='/postingsite/contents/list'>コンテンツ一覧</Link></li>
          <li><Link to='/postingsite/contents/create'>コンテンツ新規作成</Link></li>
        </ul>
      </div>
      <div className="main">
        Posting Site TOP
      </div>
      <div>
        {error && 'Error!'}
        {loading && 'Loading...'}
        {contents}
      </div>
    </div>
  );
};
export default PostingSite;

