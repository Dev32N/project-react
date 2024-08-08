import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProductsnu } from '../../../redux/productsnuSlice';
import ReactPaginate from 'react-paginate';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Select from 'react-select';
import './productnu.css'; // Đảm bảo rằng file CSS tồn tại và đường dẫn đúng

const itemsPerPage = 12;

const Productsnu = () => {
    const dispatch = useDispatch();
    const { products, loading, error } = useSelector((state) => state.productsnu);
    const [currentPage, setCurrentPage] = useState(0);
    const [sortedProducts, setSortedProducts] = useState([]);
    const [sortCriteria, setSortCriteria] = useState('');

    useEffect(() => {
        dispatch(fetchProductsnu());
    }, [dispatch]);

    useEffect(() => {
        if (sortCriteria === '') {
            setSortedProducts(products);
            return;
        }

        let sorted = [...products];
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

    const options = [
        { value: 'name-asc', label: 'Tên: A-Z' },
        { value: 'name-desc', label: 'Tên: Z-A' },
        { value: 'price-asc', label: 'Giá: Thấp đến Cao' },
        { value: 'price-desc', label: 'Giá: Cao đến Thấp' }
    ];

    return (
        <div className="product-list">
            <div className='title-sp'>
                <div>
                    <h2>{sortedProducts.length} sản phẩm :</h2>
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
                            <img src={`/images/products/female/${product.image}.jpg`} alt={product.name} className="product-image" />
                            <div className="card-info">
                                <h3 className="card-name">{product.brand}</h3>
                                <p className="card-brand">{product.name}</p>
                                <p className="card-price">{product.price}</p>
                                <p className="card-sizes">{product.sizes}</p>
                            </div>
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

export default Productsnu;
