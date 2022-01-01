import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import App from './App';
import Hello from './Hello';

const Routing = () => {
  return (
    <BrowserRouter>
      <div>
        <ul>
          <li><Link to='/'>React</Link></li>
          <li><Link to='/hello'>Hello</Link></li>
        </ul>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/hello' element={<Hello />} />
        </Routes>
      </div>
   </BrowserRouter>
  );
};

export default Routing;

