import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from './pages/home/Homepage';
import "./App.css"
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

export default function App() {
  return (
    <div>
      <div className='slogan'>Thương hiệu nước hoa được feedback nhiều nhất Việt Nam</div>
      <Header />
      <Homepage />
      <Footer />
    </div>
  )
}
