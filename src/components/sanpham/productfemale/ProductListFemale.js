import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ReactPaginate from 'react-paginate';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Select from 'react-select';
import { fetchProducts } from '../../../redux/productSlice';
import "./productfemale.css"
import { addItem } from '../../../redux/cartSlice';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

const itemsPerPage = 12;

const ProductListNu = () => {
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
        if (sortCriteria === '') {
            setSortedProducts(products.filter(product => product.gender === "female"));
            return;
        }

        let sorted = products.filter(product => product.gender === "female");
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
    const handleAddToCart = (product) => {
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
        <div className="product-list-nu">
            <div className='title-sp-nu'>
                <div>
                    <h2>{sortedProducts.length} sản phẩm </h2>
                </div>
                <div className="filter-dropdown">
                    <Select
                        options={options}
                        onChange={handleSortChange}
                        placeholder="Sắp xếp"
                        value={options.find(option => option.value === sortCriteria)}
                        isSearchable={false}
                    />
                </div>
            </div>
            <div className='contain-list'>
                <div className='list-bg'>
                    {currentItems.map((product) => (
                        <div key={product.id} className="card-item">
                            <Link to={`/product-detail/${product.id}`}>
                                <img src={`${publicUrl}/images/products/${product.image}.jpg`} alt={product.name} className="product-image" />
                                <div className="card-info">
                                    <h3 className="card-brand">{product.brand}</h3>
                                    <p className="card-name">{product.name}</p>
                                    <p className="card-price">{product.price}đ</p>
                                    <p className="card-sizes">{product.sizes}</p>
                                </div>
                            </Link>
                            <Button
                                variant="primary"
                                className="add-to-cart-btn"
                                onClick={() => handleAddToCart(product)}
                            >
                                Thêm vào giỏ hàng
                            </Button>
                        </div>
                    ))}
                </div>
            </div>
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
        </div>
    );
};

export default ProductListNu;
