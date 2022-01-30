import useState from "react";
import useFetch from "use-http"

const HttpService = () => {

  const options = {
    headers: {
      Accept: 'application/json',
    }
  };

  const [
    message,
    setMessage
  ] = useState([]);

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

  // 外部公開する HTTP メソッド
  const _message = message;
  const _setMessage = setMessage;
  const _get = get;
  const _post = post;
  const _put = put;
  const _del = del;
  const _response = response;
  const _loading = loading;
  const _error = error;

}

export default HttpService;

