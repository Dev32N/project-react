import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from './pages/home/Homepage';
import "./app.css"
export default function App() {
  return (
    <div>
      <div className='slogan'>Thương hiệu nước hoa được feedback nhiều nhất Việt Nam</div>
      <Homepage />
    </div>
  )
}
