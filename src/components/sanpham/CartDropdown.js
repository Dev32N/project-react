import React from 'react';
import { useSelector } from 'react-redux';
import './cartDropdown.css';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

const CartDropdown = () => {
    const cartItems = useSelector((state) => state.cart.items);
    const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

    // Tính tổng giá tiền, đảm bảo không có lỗi NaN do kiểu dữ liệu không đúng
    const totalPrice = cartItems.reduce((total, item) => {
        // Chuyển giá từ chuỗi thành số, nếu không chuyển đổi được sẽ trả về 0
        const price = parseFloat(item.price.replace(/,/g, '')) || 0;
        // Chuyển số lượng từ chuỗi thành số nguyên, nếu không chuyển đổi được sẽ trả về 0
        const quantity = parseInt(item.quantity, 10) || 0;
        return total + price * quantity;
    }, 0);

    return (
        <div className='cart-dropdown'>
            <div className='cart-header'>
                <h4>Giỏ hàng ({cartCount})</h4>
            </div>
            <div className='cart-body'>
                {cartItems.length === 0 ? (
                    <p>Giỏ hàng của bạn đang trống</p>
                ) : (
                    cartItems.map((item) => (
                        <div key={item.id} className='cart-item'>
                            <img src={`/images/products/${item.image}.jpg`} alt={item.name} />
                            <div className='cart-item-info'>
                                <p className='item-name'>{item.name}</p>
                                <div className='bg-content'>
                                    <p className='quantity'>Số lượng: {item.quantity}</p>
                                    <p className='price'>{parseFloat(item.price.replace(/,/g, '')).toLocaleString()} VND</p>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
            <div className='cart-footer'>
                <p className='totalmoney'>Tổng tiền: <span className='res'>{totalPrice.toLocaleString()} VND</span></p>
                <Link to="/cart-detail"><Button>Xem giỏ hàng</Button></Link>
            </div>
        </div>
    );
};

export default CartDropdown;
