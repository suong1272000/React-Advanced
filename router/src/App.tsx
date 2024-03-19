import React ,{Component} from 'react';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Search from './pages/Search';
import Address from './pages/Address';
import Book from './pages/Book';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <nav>
        <ul>
          <li><Link to={'/'}>홈</Link></li>
          <li><Link to={'/about' }>어바웃</Link></li>
          {/* 동적 라우팅 */}
          <li><Link to={'/search'}>서치</Link></li>
          <li><Link to={'/address'}>주소</Link></li>
          <li><Link to={'/book'}>책</Link></li>
        </ul>
      </nav>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/search/:coffeeId' element={<Search />} />
          <Route path='/address/:addressId' element={<Address />} />
          <Route path='/book/:bookId' element={<Book />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
