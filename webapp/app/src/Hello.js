import React, { useState, useEffect, useCallback } from "react";
import useFetch from "use-http"

const Hello = () => {
  const [
    message,
    setMessage
  ] = useState([]);

  const {
    get,
    response,
    loading,
    error
  } = useFetch(
    // Notes:
    // api サーバは 127.0.0.1:8080 で起動している. 
    // そのままだと CORS エラーとなるので, package.json で proxy の設定を記述している.
    "http://127.0.0.1:3000"
  );

  const initialize = useCallback(
    async () => {
      const initialMessage = await get("/hello");
      if (response.ok) {
        setMessage(initialMessage);
      }
    },
    [
      get,
      response
    ]
  );

  useEffect(() => {
    initialize();
  },
  [
    initialize
  ]);

  return (
    <>
      <h2>Hello</h2>
      {error && "Error!"}
      {loading && "Loading..."}
      {message}
    </>
  );
};
export default Hello;

