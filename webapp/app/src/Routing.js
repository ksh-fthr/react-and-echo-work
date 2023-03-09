import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import './css/Tab.css';
import App from './component/App/App';
import Hello from './component/Hello/Hello';
import DbConnect from './component/DbConnect/DbConnect';
import TestApi from './component/TestApi/TestAPi';
import Content from './component/Contents/Contents';
import CreateContent from './component/Contents/Create/CreateContents';


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
          <li className={tabClassName} onClick={currentTab}><Link className='li-link' to='/hello'>Hello</Link></li>
          <li className={tabClassName} onClick={currentTab}><Link className='li-link' to='/connect'>DbConnect</Link></li>
          <li className={tabClassName} onClick={currentTab}><Link className='li-link' to='/testapi'>TestApi</Link></li>
          <li className={tabClassName} onClick={currentTab}><Link className='li-link' to='/contents'>Contents</Link></li>
        </ul>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/hello' element={<Hello />} />
          <Route path='/connect' element={<DbConnect />} />
          <Route path='/testapi' element={<TestApi />} />
          <Route path='/contents' element={<Content />} />
          <Route path='/contents/create' element={<CreateContent />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default Routing;

