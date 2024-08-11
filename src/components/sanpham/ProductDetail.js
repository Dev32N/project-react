import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Breadcrumb, BreadcrumbItem, Button, Container } from 'reactstrap';
import './productDetail.css';
import { fetchProducts } from '../../redux/productSlice';
import { addItem } from '../../redux/cartSlice';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import GoToTopBtn from '../GoToTopBtn';

const ProductDetail = () => {
    const { productId } = useParams();
    const dispatch = useDispatch();
    const { loading, products, error } = useSelector((state) => state.products);

    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        if (products.length === 0) {
            dispatch(fetchProducts());
        }
        window.scrollTo(0, 0);
    }, [dispatch, products.length, productId]);

    const product = products.find(p => p.id === productId);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
    if (!product) return <p>Product not found</p>;

    const handleQuantityChange = (e) => {
        setQuantity(e.target.value);
    };

    const handleAddToCart = () => {
        dispatch(addItem({ ...product, quantity: parseInt(quantity) }));
    };

    return (
        <div>
            <Header />
            <Container className='detail-container'>
                <Container className='contain-bread'>
                    <Breadcrumb>
                        <BreadcrumbItem>
                            <Link to="/">Trang chủ</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem>
                            <Link to="/all-products">Tất cả sản phẩm</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem active>{product.brand}</BreadcrumbItem>
                    </Breadcrumb>
                </Container>
                <div className="product-detail">
                    <div className="product-detail-image">
                        <img src={`/images/products/${product.image}.jpg`} alt={product.name} />
                    </div>
                    <div className="product-detail-info">
                        <h2>{product.name}</h2>
                        <h3>Thương hiệu: {product.brand}</h3>
                        <p className="price">Giá sản phẩm: {product.price}đ</p>
                        <p className="sizes">Kích thước: {product.sizes}</p>
                        <p className="description">Mô tả: {product.description}</p>
                    </div>
                    <div className='Cart-contain'>
                        <p>Số lượng sản phẩm:
                            <select value={quantity} onChange={handleQuantityChange}>
                                {[...Array(10).keys()].map(n => (
                                    <option key={n + 1} value={n + 1}>{n + 1}</option>
                                ))}
                            </select>
                        </p>
                        <Button onClick={handleAddToCart}>Thêm vào giỏ hàng</Button>
                        <Button>Mua ngay</Button>
                    </div>
                </div>
            </Container>
            <GoToTopBtn />
            <Footer />
        </div>
    );
};

export default ProductDetail;
