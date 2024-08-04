/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Desktopnavbar from './Desktopnavbar'
import './desktopheader.css'; 

export default function Desktopheader() {
    return (
        <div>
            <div className='header'>
                <div className='header-container'>
                    <a href='#' className='logo'>
                        <img src={`${process.env.PUBLIC_URL}/images/logo-trans.png`} alt="logo" />
                    </a>
                    <div className='searchBar'>
                        <input type='text' placeholder='Tìm kiếm mẫu nước hoa....' />   
                        <button>
                            <span><i className="fa-solid fa-magnifying-glass"></i></span>
                        </button>
                    </div>
                    <div className='navbar'>

                    </div>
                    <div className='contentnav2'>
                        <a href='#' className='user-login'>
                            <img src={`${process.env.PUBLIC_URL}/images/icon-user.svg`} alt="user" />
                            <p>Đăng nhập</p>
                        </a>
                        <a href='#' className='like-item'>
                            <img src={`${process.env.PUBLIC_URL}/images/icon-favorite.svg`} alt="like" />
                            <span className='likecount'>0</span>
                        </a>
                        <a href='#' className='cart-item'>
                            <img src={`${process.env.PUBLIC_URL}/images/icon-cart.svg`} alt="cart" />
                            <span className='cartcount'>0</span>
                        </a>
                    </div>
                </div>
                <Desktopnavbar />
            </div>
        </div>
    )
}
