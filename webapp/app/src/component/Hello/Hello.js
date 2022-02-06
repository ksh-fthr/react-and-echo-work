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
    "http://127.0.0.1:3000/api",
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
    <div>
      <h2>Hello</h2>
      {error && "Error!"}
      {loading && "Loading..."}
      {message}
    </div>
  );
};
export default Hello;

