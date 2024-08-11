import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import './group2.css';
import { Navigation, Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../../redux/productSlice';

const Group2nam = () => {
    const dispatch = useDispatch();
    const { loading, products, error } = useSelector((state) => state.products);

    useEffect(() => {
        dispatch(fetchProducts());
        window.scrollTo(0, 0);
    }, [dispatch]);

    const menProducts = products.filter((product) => product.gender === "male");

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <section className="group2">
            <div>
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
                    {menProducts.map((product) => (
                        <SwiperSlide key={product.id}>
                            <Link to={`/product-detail/${product.id}`}>
                                <div className="product-card site-animation">
                                    <img src={`/images/products/${product.image}.jpg`} alt={product.name} />
                                    <div className="product-info">
                                        <h3>{product.brand}</h3>
                                        <p className='name'>{product.name}</p>
                                        <p className="price">{product.price} VND</p>
                                        <p className='sizes'>{product.sizes}</p>
                                    </div>
                                </div>
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Group2nam;
