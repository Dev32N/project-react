import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Col, Container, Row } from 'reactstrap';
import { removeItem, updateQuantity } from '../../redux/cartSlice';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import './cartDetail.css';
import { Link } from 'react-router-dom';
import GoToTopBtn from '../GoToTopBtn';

const CartDetail = () => {
    const publicUrl = process.env.PUBLIC_URL;
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.items);

    const handleQuantityChange = (id, quantity) => {
        if (quantity > 0) {
            dispatch(updateQuantity({ id, quantity }));
        }
    };

    const handleRemoveItem = (id) => {
        dispatch(removeItem(id));
    };

    // Calculate subtotal
    const calculateSubtotal = () => {
        return cartItems.reduce((acc, item) => {
            const price = parseFloat(item.price.replace(/,/g, '')) || 0;
            const quantity = Number(item.quantity) || 0;
            return acc + (price * quantity);
        }, 0);
    };

    const subtotal = calculateSubtotal();
    const shippingCost = 0;
    const total = subtotal + shippingCost;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <Header />
            <Container className="cart-detail">
                <Row className='titledetail'>
                    <Col>
                        <h4 className='m-0'>
                            Giỏ hàng của bạn <span style={{ color: '#333', fontSize: '14px' }}>
                                ( {cartItems.length} sản phẩm )
                            </span>
                        </h4>
                    </Col>
                    <Col className='text-right txtbuy'>
                        <Link to='/all-products' >
                            <p className='m-0'>
                                Tiếp tục mua hàng {">"}
                            </p>
                        </Link>
                    </Col>
                </Row>
                {cartItems.length === 0 ? (
                    <Row className='empty-cart justify-content-center align-items-center'>
                        <Col className='text-center'>
                            <p className='m-0'>Giỏ hàng của bạn đang trống</p>
                            <Link to="/all-products">
                                <Button color="success" className='btn-continiu mt-2'>
                                    Đến trang sản phẩm
                                </Button>
                            </Link>
                        </Col>
                    </Row>
                ) : (
                    <Row className='d-flex justify-content-between'>
                        <Col md={8} className='cart-items'>
                            {cartItems.map(item => (
                                <Row key={item.id} className="cart-item-detail">
                                    <Col xs={2}>
                                        <img src={`${publicUrl}/images/products/${item.image}.jpg`} alt={item.name} className="item-image" />
                                    </Col>
                                    <Col xs={3} className="item-detail-brand-name">
                                        <p className='item-detail-brand'>{item.brand}</p>
                                        <p className='item-detail-name'>{item.name}</p>
                                    </Col>
                                    <Col xs={3} className="item-detail-price">
                                        <p>{parseFloat(item.price.replace(/,/g, '')).toLocaleString()} VND</p>
                                    </Col>
                                    <Col xs={2} className="item-detail-quantity">
                                        <Button onClick={() => handleQuantityChange(item.id, item.quantity - 1)}>-</Button>
                                        <p className='m-2'>{item.quantity}</p>
                                        <Button onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>+</Button>
                                    </Col>
                                    <Col xs={2} className="item-detail-remove">
                                        <Button color='danger' onClick={() => handleRemoveItem(item.id)}>X</Button>
                                    </Col>
                                </Row>
                            ))}
                        </Col>
                        <Col md={4} className='payment-container mt-2'>
                            <Row className='mb-1'>
                                <Col><p>Tạm Tính:</p></Col>
                                <Col className='text-right'><p>{subtotal.toLocaleString()} VND</p></Col>
                            </Row>
                            <Row className='mb-1'>
                                <Col><p>Phí vận chuyển:</p></Col>
                                <Col className='text-right'><p>Free</p></Col>
                            </Row>
                            <Row className='mb-1'>
                                <Col><p>Tổng tiền:</p></Col>
                                <Col className='text-right item-total-money'><p>{total.toLocaleString()} VND</p></Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Button className='w-100'>Thanh Toán</Button>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                )}
            </Container>
            <GoToTopBtn />
            <Footer />
        </div>
    );
};

export default CartDetail;
