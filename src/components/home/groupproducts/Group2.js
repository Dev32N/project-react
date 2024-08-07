import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import './group2.css';
import { Navigation, Autoplay } from 'swiper/modules';
import { Container } from 'reactstrap';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsnam } from '../../../redux/productsnamSlice';

const Group2 = () => {
    const dispatch = useDispatch();
    const { products, loading, error } = useSelector((state) => state.productsnam);

    useEffect(() => {
        dispatch(fetchProductsnam());
    }, [dispatch]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <section className="group2">
            <Container>
                <div className='headingg2 animation-tran'>
                    <h3 className='site-animation'>Nước Hoa Nam</h3>
                    <Link to="/nuoc-hoa-nam">
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
                            <div className="product-card site-animation">
                                <img src={`./images/products/male/${product.image}.jpg`} alt={product.name} />
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

export default Group2;
