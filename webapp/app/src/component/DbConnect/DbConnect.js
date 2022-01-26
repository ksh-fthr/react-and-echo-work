import React, { useState, useEffect, useCallback } from "react";
import useFetch from "use-http"

const DbConnect = () => {
  const [
    message,
    setMessage
  ] = useState([]);

  const options = {
    headers: {
      Accept: 'application/json',
    }
  };

  const {
    get,
    response,
    loading,
    error
  } = useFetch(
    "http://127.0.0.1:3000/api",
    options
  );

  const initialize = useCallback(
    async () => {
      const initialMessage = await get("/contents/connect");
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
    <div>
      <h2>DbConnect</h2>
      {error && "Error!"}
      {loading && "Loading..."}
      {message}
    </div>
  );
};
export default DbConnect;


