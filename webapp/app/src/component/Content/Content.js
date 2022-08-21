import React, { useState, useCallback } from 'react';
import useFetch from 'use-http'
import CreateContent from './Create/CreateContent';

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
    'http://127.0.0.1:3000/api',
  );

  /**
   * コンテンツ取得 API の呼び出し( ID 指定なし )
   */
  const getAllContents = useCallback(async () => {
    const contents = await get('/testapi/all');
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
      <h2>Content</h2>
      <div>
        コンテンツ一覧
      </div>
      <div>
        // TODO: ボタンアクションで CreateContent を呼び出す
        新規作成
      </div>
      <hr />
      <div>
        {error && 'Error!'}
        {loading && 'Loading...'}
        {contents}
      </div>
    </div>
   );
};
export default Content;

