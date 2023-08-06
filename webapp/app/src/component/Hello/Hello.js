import React, { useState, useEffect, useCallback } from 'react'
import useFetch from 'use-http'

const Hello = () => {
  const [message, setMessage] = useState([])

  const { get, response, loading, error } = useFetch(
    'http://127.0.0.1:3000/api'
  )

  const initialize = useCallback(async () => {
    const initialMessage = await get('/hello')
    if (response.ok) {
      setMessage(initialMessage)
    }
  }, [
    // 依存配列
    // get, response に変化があった場合に setMessage が再実行される
    get,
    response,
  ])

  //
  // useEffectの実行されるタイミング
  // 1. 第二引数を指定しない場合、副作用は全レンダリング後に実行
  // 2. 第二引数を指定した場合、配列に格納された値が変更された場合のみ実行
  //
  //
  useEffect(() => {
    // 副作用として実行される処理
    initialize()
  }, [initialize])

  return (
    <div>
      <h2>Hello</h2>
      {error && 'Error!'}
      {loading && 'Loading...'}
      {message}
    </div>
  )
}
export default Hello
