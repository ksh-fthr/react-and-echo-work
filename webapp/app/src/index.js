import './css/index.css'
import reportWebVitals from './reportWebVitals'
import { createRoot } from 'react-dom/client'
import Routing from './Routing'

// 下記が発生していたので対応.
// ReactDOM.render is deprecated since React 18.0.0, use createRoot instead, see https://reactjs.org/link/switch-to-createroot
//
// See: https://zenn.dev/kohski/articles/create-react-app-error-v18
const container = document.getElementById('root')
const root = createRoot(container)
root.render(<Routing />)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
