import React, { useState } from "react";
import useFetch from "use-http"

const TestApi = () => {
  const [
    contents,
    setContents
  ] = useState('');

  const [
    id,
    setId
  ] = useState('');

  const options = {
    headers: {
      Accept: 'application/json',
    }
  };

  const {
    get,
    post,
    put,
    del,
    response,
    loading,
    error
  } = useFetch(
    "http://127.0.0.1:3000/api",
    options
  );

  const handleIdChange = (event) => {
      setId(event.target.value);
  };

  /**
   * コンテンツ取得 API の呼び出し( ID 指定なし )
   */
  const getAllContents = async () => {
    const contents = await get("/testapi/all");
    if (response.ok) {
      setContents(contents);
    }
  };

  /**
   * コンテンツ取得 API の呼び出し( ID 指定あり )
   */
  const getContents = async () => {
    const contents = await get(`/testapi/${id}`);
    if (response.ok) {
      setContents(contents);
    }
  };

  /**
   * コンテンツ登録 API の呼び出し
   */
  const postContents = async () => {
    const postData = {
      contents: 'post contents data'
    };
    const contents = await post('/testapi', postData);
    if (response.ok) {
      setContents(contents);
    }
  }

  /**
   * コンテンツ更新 API の呼び出し
   */
  const putContents = async () => {
    const putData = {
      contents: 'put contents data'
    };
    const contents = await put(`/testapi/${id}`, putData);
    if (response.ok) {
      setContents(contents);
    }
  }

  /**
   * コンテンツを削除 API の呼び出し
   */
  const deleteContents = async () => {
    const contents = await del(`/testapi/${id}`);
    if (response.ok) {
      setContents(contents);
    }
  }

  return (
    <div>
      <h2>TestApi</h2>
      <div>
        <div>
          <input type="text" id="content-id" value={id} onChange={handleIdChange} />
        </div>
        <div class="api-buttons">
          <button onClick={getAllContents}>get all contents</button>
          <button onClick={getContents}>get contents</button>
          <button onClick={postContents}>post contents</button>
          <button onClick={putContents}>put contents</button>
          <button onClick={deleteContents}>delete contents</button>
        </div>
      </div>
      <hr />
      <div>
        {error && "Error!"}
        {loading && "Loading..."}
        {contents}
      </div>
    </div>
   );
};
export default TestApi;


