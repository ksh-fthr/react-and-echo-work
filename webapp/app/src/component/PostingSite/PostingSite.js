import React, { useState, useEffect, useCallback } from "react";
import useFetch from 'use-http'
import { Link } from 'react-router-dom';

// TODO: API 疎通ができたらこのメッセージは削除する.
const initialMessage = `
ようこそ。ここは任意のコンテンツや記事を投稿できるポスティングサイトです。
ご自身の TODO 管理や備忘録等、ご自由にお使いください。
`;

const PostingSite = () => {
  const [
    message,
    setTopAnnounce
  ] = useState([]);

  const {
    get,
    response,
    loading,
    error
  } = useFetch(
    "http://127.0.0.1:3000/api",
  );

  const initialize = useCallback(
    async () => {
      // TODO: API 疎通ができたらこの部分を有効化する.
      // const initialMessage = await get("/announce");
      // if (response.ok) {
      //   setTopAnnounce(initialMessage);
      // }
      setTopAnnounce(initialMessage);
    },
    [
      // 依存配列
      // get, response に変化があった場合に setTopAnnounce が再実行される
      get,
      response
    ]
  );

  //
  // useEffectの実行されるタイミング
  // 1. 第二引数を指定しない場合、副作用は全レンダリング後に実行
  // 2. 第二引数を指定した場合、配列に格納された値が変更された場合のみ実行
  //
  //
  useEffect(() => {
    // 副作用として実行される処理
    initialize();
  },
    [
      initialize
    ]);

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
        <h3>Posting Site へようこそ</h3>
        {error && 'Error!'}
        {loading && 'Loading...'}
        {message}
      </div>
    </div>
  );
};
export default PostingSite;

