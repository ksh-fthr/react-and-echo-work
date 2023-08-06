import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import './css/Tab.css'
import './css/PostingSite.css'

import App from './component/App/App'
import Hello from './component/Hello/Hello'
import DbConnect from './component/DbConnect/DbConnect'
import TestApi from './component/TestApi/TestAPi'
// PostingSite
import PostingSite from './component/PostingSite/PostingSite'
// PostingSite > Contents
import ListContents from './component/PostingSite/Contents/List/ListContents'
import CreateContents from './component/PostingSite/Contents/Create/CreateContents'
import EditContents from './component/PostingSite/Contents/Edit/EditContents'
import DeleteContents from './component/PostingSite/Contents/Delete/DeleteContents'
// PostingSite > Articels
import ListArticles from './component/PostingSite/Articles/List/ListArticles'
import ViewArticle from './component/PostingSite/Articles/View/ViewArticle'

const tabClassName = 'tab-item'
const currentTabClassName = `${tabClassName} current`

const Routing = () => {
  const currentTab = (event) => {
    // TODO: React 的には `ref` を使うのが作法っぽいので後で見直す
    const targetElements = document.getElementsByClassName(tabClassName)

    // getElementsByClassName で取得したオブジェクトには forEach が実装されていないので
    // Array.from で変換する
    Array.from(targetElements).forEach((element) => {
      element.className = tabClassName
    })

    event.target.parentElement.className = currentTabClassName
  }

  return (
    <BrowserRouter>
      <div className="tab-area-base">
        <ul className="tab-menu-base">
          <li className={currentTabClassName} onClick={currentTab}>
            <Link className="li-link" to="/">
              React
            </Link>
          </li>
          <li className={tabClassName} onClick={currentTab}>
            <Link className="li-link" to="/hello">
              Hello
            </Link>
          </li>
          <li className={tabClassName} onClick={currentTab}>
            <Link className="li-link" to="/connect">
              DbConnect
            </Link>
          </li>
          <li className={tabClassName} onClick={currentTab}>
            <Link className="li-link" to="/testapi">
              TestApi
            </Link>
          </li>
          <li className={tabClassName} onClick={currentTab}>
            <Link className="li-link" to="/postingsite">
              PostingSite
            </Link>
          </li>
        </ul>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/hello" element={<Hello />} />
          <Route path="/connect" element={<DbConnect />} />
          <Route path="/testapi" element={<TestApi />} />
          <Route path="/postingsite" element={<PostingSite />} />
          <Route path="/postingsite/contents/list" element={<ListContents />} />
          <Route
            path="/postingsite/contents/create"
            element={<CreateContents />}
          />
          <Route path="/postingsite/contents/edit" element={<EditContents />} />
          <Route
            path="/postingsite/contents/delete"
            element={<DeleteContents />}
          />
          <Route
            path="/postingsite/contents/article/list"
            element={<ListArticles />}
          />
          <Route
            path="/postingsite/contents/article/view"
            element={<ViewArticle />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default Routing
