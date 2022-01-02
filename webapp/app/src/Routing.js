import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import App from './component/App/App';
import Hello from './component/Hello/Hello';

const Routing = () => {
  return (
    <BrowserRouter>
      <div>
        <ul>
          <li><Link to='/'>React</Link></li>
          <li><Link to='/api/hello'>Hello</Link></li>
        </ul>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/api/hello' element={<Hello />} />
        </Routes>
      </div>
   </BrowserRouter>
  );
};

export default Routing;

