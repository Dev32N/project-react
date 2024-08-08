import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import Homepage from './pages/home/Homepage';
import Perfumemale from './pages/product/Perfumemale';
import Perfumefemale from './pages/product/Perfumefemale';
import Slips from './pages/product/Slips';


export default function App() {
  return (
    <Router>
      <div>
        <div className='slogan'>Thương hiệu nước hoa được feedback nhiều nhất Việt Nam</div>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/nuoc-hoa-nam" element={<Perfumemale />} />
          <Route path="/nuoc-hoa-nu" element={<Perfumefemale />} />
          <Route path="/son-moi" element={<Slips />} />
          <Route path="/blog" element={<Blogs />} />
          <Route path="/lien-he" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}
