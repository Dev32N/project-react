import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import './group3.css';
import { Navigation, Autoplay } from 'swiper/modules';
import { Container } from 'reactstrap';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsnu } from '../../../redux/productsnuSlice';

const Group3spnu = () => {
    const dispatch = useDispatch();
    const { products, loading, error } = useSelector((state) => state.productsnu);

    useEffect(() => {
        dispatch(fetchProductsnu());
    }, [dispatch]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <section className="group3">
            <Container>
                <div className='headingg3 animation-tran'>
                    <h3 className='site-animation'>Nước Hoa Nữ</h3>
                    <Link to="/nuoc-hoa-nu">
                        <p className='site-animation'>Xem thêm
                            <span>
                                <i className="fa-solid fa-angle-right"></i>
                            </span>
                        </p>
                    </Link>
                </div>
                <Swiper
                    modules={[Navigation, Autoplay]}
                    navigation
                    spaceBetween={0}
                    slidesPerView={6}
                    loop={true}
                    autoplay={{
                        delay: 3500,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        320: { slidesPerView: 2 },
                        640: { slidesPerView: 3 },
                        768: { slidesPerView: 3 },
                        1024: { slidesPerView: 6 }
                    }}
                    className="group2ItemSwiper animation-tran"
                >
                    {products.map((product) => (
                        <SwiperSlide key={product.id}>
                            <div className="product-card-group3 site-animation">
                                <img src={`./images/products/female/${product.image}.jpg`} alt={product.name} />
                                <div className="product-info">
                                    <h3>{product.brand}</h3>
                                    <p className='name'>{product.name}</p>
                                    <p className="price">{product.price}</p>
                                    <p className='sizes'>{product.sizes}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Container>
        </section>
    );
};

export default Group3spnu;
