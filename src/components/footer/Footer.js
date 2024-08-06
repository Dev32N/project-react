/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Container, Col, Form, Button } from 'react-bootstrap';
import './footer.css';
import { Input } from 'reactstrap';

function Footer() {
    return (
        <Container className='footer'>
            <Container className='footer-container'>
                <Col xs={12} sm={6} md={3} className='col1'>
                    <img src="/images/logo-trans.png" alt="1989perfume logo" className='footer-logo' />
                    <p>
                        Trên mọi chặng đường chúng tôi đều mang đến các giá trị tốt nhất đến cho người dùng.
                        1989Perfume luôn lắng nghe khách hàng để ngày càng cải thiện và mang đến chất lượng
                        dịch vụ tốt nhất cho người tiêu dùng.
                    </p>
                    <div className="social-icons">
                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                    </div>
                </Col>
                <Col xs={12} sm={6} md={3} className='col2'>
                    <h5>Về chúng tôi</h5>
                    <ul className='text-left'>
                        <li><a href="#">Nước hoa nam</a></li>
                        <li><a href="#">Nước hoa nữ</a></li>
                        <li><a href="#">Son môi</a></li>
                        <li><a href="#">Blog nổi bật</a></li>
                        <li><a href="#">Liên hệ với chúng tôi</a></li>
                    </ul>
                </Col>
                <Col xs={12} sm={6} md={3} className='col3'>
                    <h5>Hỗ trợ khách hàng</h5>
                    <ul>
                        <li><a href="#">Các câu hỏi thường gặp</a></li>
                        <li><a href="#">Cách thức mua hàng</a></li>
                        <li><a href="#">Hướng dẫn đặt hàng</a></li>
                        <li><a href="#">Phương thức thanh toán</a></li>
                        <li><a href="#">Phương thức vận chuyển</a></li>
                        <li><a href="#">Chính sách đổi trả</a></li>
                        <li><a href="#">Chính sách bảo mật</a></li>
                    </ul>
                </Col>
                <Col xs={12} sm={6} md={3} className='col4'>
                    <h5>Đăng ký nhận thông báo</h5>
                    <Form>
                        <Input type='email' placeholder='nhập email của bạn' />
                        <Button variant="primary" type="submit">
                            Đăng ký
                        </Button>
                    </Form>
                    <div className='contact'>
                        <i className="fas fa-phone"></i>
                        <span> Hotline: 798469635 (9am - 10pm)</span>
                    </div>
                    <div className='payment'>
                        <p><span><i class="fa-regular fa-credit-card"></i></span>Thanh toán tiện lợi</p>
                        <img src='./images/payment.png'></img>
                    </div>
                </Col>
            </Container>
            <div className="copyright">
                <hr />
                <p>Copyright 2024 © nhanphan. All Rights Reserved.</p>
            </div>
        </Container>
    );
}

export default Footer;
