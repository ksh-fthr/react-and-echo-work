import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import './Routing.css';
import App from './component/App/App';
import Hello from './component/Hello/Hello';
import DbConnect from './component/DbConnect/DbConnect';

const tabClassName = 'tab-item';
const currentTabClassName = `${tabClassName} current`;

const Routing = () => {

  const currentTab = (event) => {
    // TODO: React 的には `ref` を使うのが作法っぽいので後で見直す
    const targetElements = document.getElementsByClassName(tabClassName);

    // getElementsByClassName で取得したオブジェクトには forEach が実装されていないので
    // Array.from で変換する
    Array.from(targetElements).forEach((element) => {
      element.className = tabClassName;
    });

    event.target.parentElement.className = currentTabClassName;
  };

  return (
    <BrowserRouter>
      <div className='tab-area-base'>
        <ul className='tab-menu-base'>
          <li className={currentTabClassName} onClick={currentTab}><Link className='li-link' to='/'>React</Link></li>
          <li className={tabClassName} onClick={currentTab}><Link className='li-link' to='/api/hello'>Hello</Link></li>
          <li className={tabClassName} onClick={currentTab}><Link className='li-link' to='/api/connect'>DbConnect</Link></li>
        </ul>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/api/hello' element={<Hello />} />
          <Route path='/api/connect' element={<DbConnect />} />
        </Routes>
      </div>
   </BrowserRouter>
  );
};

export default Routing;

