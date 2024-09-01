// 初期Stateを設定
export const initialArticlesState = { articles: [] }

export const currentArticlesState = initialArticlesState

// アクション用の contentsReducerを作成する
export const articlesReducer = (state, action) => {
  switch (action.type) {
    case 'add_articless':
      currentArticlesState.contents = action.payload
      break
    default:
      throw new Error()
  }
}
