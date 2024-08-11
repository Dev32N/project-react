import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Desktopnavbar from './Desktopnavbar';
import './desktopheader.css';
import CartDropdown from '../sanpham/CartDropdown';

export default function Desktopheader() {
    const [isCartDropdownOpen, setCartDropdownOpen] = useState(false);
    const cartItems = useSelector((state) => state.cart.items);
    const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

    return (
        <div>
            <div className='header'>
                <div className='header-container'>
                    <a href='/' className='logo'>
                        <img src={`/images/logo-trans.png`} alt="logo" />
                    </a>
                    <div className='searchBar'>
                        <input type='text' placeholder='Tìm kiếm mẫu nước hoa....' />
                        <button className='btn-searchbar'>
                            <span><i className="fa-solid fa-magnifying-glass"></i></span>
                        </button>
                    </div>
                    <div className='contentnav2'>
                        <a href='#' className='user-login'>
                            <img src={`/images/icon-user.svg`} alt="user" />
                            <p>Đăng nhập</p>
                        </a>
                        <a href='#' className='like-item'>
                            <img src={`/images/icon-favorite.svg`} alt="like" />
                            <p className='likecount'>0</p>
                        </a>
                        <div className='cart-container'
                            onMouseEnter={() => setCartDropdownOpen(true)}
                            onMouseLeave={() => setCartDropdownOpen(false)}>
                            <Link to="/cart-detail" className='cart-link'>
                                <div className='cart-item'>
                                    <img src={`/images/icon-cart.svg`} alt="cart" />
                                    <p className='cartcount'>{cartCount}</p>
                                </div>
                            </Link>
                            {isCartDropdownOpen && <CartDropdown />}
                        </div>
                    </div>
                </div>
                <Desktopnavbar />
            </div>
        </div>
    );
}
