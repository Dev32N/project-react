// src/App.js
import React from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';
import "./App.css";
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import Homepage from './pages/home/Homepage';
import NotFound from './pages/NotFound';
import Perfumemale from './pages/product/Perfumemale';
import Perfumefemale from './pages/product/Perfumefemale';
import Slips from './pages/product/Slips';

export default function App() {
  return (
    <div>
      <div className='slogan'>Thương hiệu nước hoa được feedback nhiều nhất Việt Nam</div>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/nuoc-hoa-nam" element={<Perfumemale />} />
          <Route path="/nuoc-hoa-nu" element={<Perfumefemale />} />
          <Route path="/son-moi" element={<Slips />} />
          <Route path="/blog" element={<Blogs />} />
          <Route path="/lien-he" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </div>
  );
}
