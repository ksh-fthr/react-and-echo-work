// 初期Stateを設定
export const initialContentsState = { contents: [] }

export const currentContentsState = initialContentsState

// アクション用の contentsReducerを作成する
export const contentsReducer = (state, action) => {
  switch (action.type) {
    case 'add_contents':
      currentContentsState.contents = {
        ...state,
        contents: action.payload
      }
      break
    default:
      throw new Error()
  }
}
