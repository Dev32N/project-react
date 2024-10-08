import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import "./App.css";
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import Homepage from './pages/home/Homepage';
import Perfumemale from './pages/product/Perfumemale';
import Perfumefemale from './pages/product/Perfumefemale';
import ProductDetail from './components/sanpham/ProductDetail';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartDetail from './components/sanpham/CartDetail';
import ShowAllProducts from './components/sanpham/ShowAllProducts';

export default function App() {
  return (
    <HashRouter>
      <div>
        <div className='slogan'>Tiệm Cafe sạch mang đến trải nghiệm thưởng thức cà phê nguyên chất, không hóa chất vì sức khỏe người tiêu dùng.</div>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/nuoc-hoa-nam" element={<Perfumemale />} />
          <Route path="/nuoc-hoa-nu" element={<Perfumefemale />} />
          <Route path="/blog" element={<Blogs />} />
          <Route path="/lien-he" element={<Contact />} />
          <Route path="/product-detail/:productId" element={<ProductDetail />} />
          <Route path="/cart-detail" element={<CartDetail />} />
          <Route path="/all-products" element={<ShowAllProducts />} />


        </Routes>
      </div>
    </HashRouter>
  );
}
