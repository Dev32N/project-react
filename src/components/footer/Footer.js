/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className='footer'>
            <div className='footer-container'>
                <div className='col1'>
                    <img src="/images/logo-trans.png" alt="1989perfume logo" className='footer-logo' />
                    <p>
                        Trên mọi chặng đường chúng tôi đều mang đến các giá trị tốt nhất đến cho người dùng.
                        1989Perfume luôn lắng nghe khách hàng để ngày càng cải thiện và mang đến chất lượng
                        dịch vụ tốt nhất cho người tiêu dùng.
                    </p>
                    <div className="social-icons">
                        <a href="https://www.facebook.com/luis.phan.798/?locale=vi_VN"><i className="fab fa-facebook-f"></i></a>
                        <a href="https://www.facebook.com/luis.phan.798/?locale=vi_VN"><i className="fab fa-twitter"></i></a>
                        <a href="https://www.facebook.com/luis.phan.798/?locale=vi_VN"><i className="fab fa-instagram"></i></a>
                    </div>
                </div>
                <div className='col3'>
                    <h5>Hỗ trợ khách hàng</h5>
                    <ul>
                        <li><Link to="/lien-he">Các câu hỏi thường gặp</Link></li>
                        <li><Link to="/lien-he">Cách thức mua hàng</Link></li>
                        <li><Link to="/lien-he">Hướng dẫn đặt hàng</Link></li>
                        <li><Link to="/lien-he">Phương thức thanh toán</Link></li>
                        <li><Link to="/lien-he">Phương thức vận chuyển</Link></li>
                        <li><Link to="/lien-he">Chính sách đổi trả</Link></li>
                        <li><Link to="/lien-he">Chính sách bảo mật</Link></li>
                    </ul>
                </div>
                <div className='col2'>
                    <h5>Về chúng tôi</h5>
                    <ul className='text-left'>
                        <li><Link to="/nuoc-hoa-nam">Nước hoa nam</Link></li>
                        <li><Link to="/nuoc-hoa-nu">Nước hoa nữ</Link></li>
                        <li><Link to="/blog">Blog trendy</Link></li>
                        <li><Link to="/lien-he">Liên hệ 1989Perfume</Link></li>
                    </ul>
                </div>
                <div className='col4'>
                    <h5>Đăng ký nhận thông báo</h5>
                    <form>
                        <input type='email' placeholder='nhập email của bạn' />
                        <button variant="primary" type="submit">
                            Đăng ký
                        </button>
                    </form>
                    <div className='contact'>
                        <i className="fas fa-phone"></i>
                        <span> Hotline: 798469635 (9am - 10pm)</span>
                    </div>
                    <div className='payment'>
                        <p><span><i class="fa-regular fa-credit-card"></i></span> Thanh toán tiện lợi</p>
                        <img src='/images/payment.png'></img>
                    </div>
                </div>
            </div>
            <div className="copyright">
                <hr />
                <p>Copyright 2024 © nhanphan. All Rights Reserved.</p>
            </div>
        </div>
    );
}

export default Footer;
