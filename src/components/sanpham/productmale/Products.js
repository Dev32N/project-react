import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../../../redux/productsSlice';
import ReactPaginate from 'react-paginate';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import './products.css';

const itemsPerPage = 12;

const ProductList = () => {
    const dispatch = useDispatch();
    const { products, loading, error } = useSelector((state) => state.products);
    const [currentPage, setCurrentPage] = useState(0);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    // Calculate the current items to display
    const offset = currentPage * itemsPerPage;
    const currentItems = products.slice(offset, offset + itemsPerPage);
    const pageCount = Math.ceil(products.length / itemsPerPage);

    const handlePageClick = (event) => {
        setCurrentPage(event.selected);
        window.scrollTo(0, 0); // Cuộn lên đầu trang
    };

    return (
        <div className="product-list">
            <div className='list-bg'>
                {currentItems.map((product) => (
                    <div key={product.id} className="card-item">
                        <img src={`./images/products/male/${product.image}.jpg`} alt={product.name} className="product-image" />
                        <div className="card-info">
                            <h3 className="card-name">{product.brand}</h3>
                            <p className="card-brand">{product.name}</p>
                            <p className="card-price">{product.price}</p>
                            <p className="card-sizes">{product.sizes}</p>
                        </div>
                    </div>
                ))}
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

export default ProductList;
