import React, { useEffect, useCallback } from "react";

import httpService from "../../service/HttpService";

const Hello = () => {

  const initialize = useCallback(
    async () => {
      const initialMessage = await httpService._get("/hello");
      if (httpService._response.ok) {
        httpService._setMessage(initialMessage);
      }
    },[]
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
      {httpService._error && "Error!"}
      {httpService._loading && "Loading..."}
      {httpService._message}
    </div>
  );
};
export default Hello;

