import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ReactPaginate from 'react-paginate';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Select from 'react-select';
import { fetchProducts } from '../../redux/productSlice';
import { Col, Container, Row, Button } from 'react-bootstrap';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import './showallproducts.css';
import { addItem } from '../../redux/cartSlice';
import { Link } from 'react-router-dom';
import GoToTopBtn from '../GoToTopBtn';

const itemsPerPage = 12;

const ShowAllProducts = () => {
    const publicUrl = process.env.PUBLIC_URL;
    const dispatch = useDispatch();
    const { loading, products, error } = useSelector((state) => state.products);
    const [currentPage, setCurrentPage] = useState(0);
    const [sortedProducts, setSortedProducts] = useState([]);
    const [sortCriteria, setSortCriteria] = useState('');

    useEffect(() => {
        dispatch(fetchProducts());
        window.scrollTo(0, 0);
    }, [dispatch]);

    useEffect(() => {
        let sorted = [...products];
        if (sortCriteria === '') {
            setSortedProducts(sorted);
            return;
        }
        switch (sortCriteria) {
            case 'name-asc':
                sorted.sort((a, b) => a.name.localeCompare(b.name));
                break;
            case 'name-desc':
                sorted.sort((a, b) => b.name.localeCompare(a.name));
                break;
            case 'price-asc':
                sorted.sort((a, b) => parseFloat(a.price.replace(/[^0-9.-]+/g, "")) - parseFloat(b.price.replace(/[^0-9.-]+/g, "")));
                break;
            case 'price-desc':
                sorted.sort((a, b) => parseFloat(b.price.replace(/[^0-9.-]+/g, "")) - parseFloat(a.price.replace(/[^0-9.-]+/g, "")));
                break;
            default:
                break;
        }
        setSortedProducts(sorted);
    }, [products, sortCriteria]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    const offset = currentPage * itemsPerPage;
    const currentItems = sortedProducts.slice(offset, offset + itemsPerPage);
    const pageCount = Math.ceil(sortedProducts.length / itemsPerPage);

    const handlePageClick = (event) => {
        setCurrentPage(event.selected);
        window.scrollTo(0, 0);
    };

    const handleSortChange = (selectedOption) => {
        setSortCriteria(selectedOption.value);
        setCurrentPage(0);
    };

    const addToCartFunc = (product) => {
        const quantity = 1; // Assuming you want to add one item at a time
        dispatch(addItem({ ...product, quantity }));
    };

    const options = [
        { value: 'name-asc', label: 'Tên: A-Z' },
        { value: 'name-desc', label: 'Tên: Z-A' },
        { value: 'price-asc', label: 'Giá: Thấp đến Cao' },
        { value: 'price-desc', label: 'Giá: Cao đến Thấp' }
    ];

    return (
        <div>
            <Header />
            <h2 className='text-center p-2 m-3'>Tất cả sản phẩm</h2>
            <Container className="all-products">
                <Row className='all-pro-title justify-content-between'>
                    <Col>
                        <h3>{sortedProducts.length} sản phẩm</h3>
                    </Col>
                    <Col>
                        <Select
                            className="custom-drop-allproduct"
                            options={options}
                            onChange={handleSortChange}
                            placeholder="Sắp xếp"
                            value={options.find(option => option.value === sortCriteria)}
                            isSearchable={false}
                        />
                    </Col>
                </Row>
                <Row className='all-container'>
                    {currentItems.map((product) => (
                        <Col key={product.id} xs={12} sm={6} md={4} lg={3} className="all-item-cart">
                            <Link to={`/product-detail/${product.id}`} className="product-link">
                                <img src={`${publicUrl}/images/products/${product.image}.jpg`} alt={product.name} className="product-image" />
                                <div className="all-pro-info">
                                    <h3 className="all-name">{product.brand}</h3>
                                    <p className="all-brand">{product.name}</p>
                                    <p className="all-price">{product.price} VND</p>
                                    <p className="all-sizes">{product.sizes}</p>
                                </div>
                            </Link>
                            <Button
                                variant="primary"
                                className="all-add-to-cart-btn"
                                onClick={() => addToCartFunc(product)}
                            >
                                Thêm vào giỏ hàng
                            </Button>
                        </Col>
                    ))}
                </Row>
                <ReactPaginate
                    previousLabel={<FontAwesomeIcon icon={faChevronLeft} />}
                    nextLabel={<FontAwesomeIcon icon={faChevronRight} />}
                    breakLabel={"..."}
                    pageCount={pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={handlePageClick}
                    containerClassName={"pagination"}
                    activeClassName={"active"}
                />
            </Container>
            <GoToTopBtn />
            <Footer />
        </div>
    );
};

export default ShowAllProducts;
