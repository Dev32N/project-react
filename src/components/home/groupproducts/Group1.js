import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import './group1.css';
import { Navigation, Autoplay } from 'swiper/modules';
import { Container } from 'reactstrap';

const Group1 = () => {
    const products = [
        { id: 1, brand: 'ZAHAROFF', name: 'Zaharoff Signature Seraphim Blue', price: '3,860,000đ', sizes: '1 Sizes', isNew: true, image: './images/products/zaharoff-signature-seraphim.jpg' },
        { id: 2, brand: 'ZAHAROFF', name: 'Zaharoff Signature Bloom', price: '3,860,000đ', sizes: '1 Sizes', isNew: true, image: './images/products/zaharoff-signature.jpg' },
        { id: 3, brand: 'JEAN PAUL GAULTIER', name: 'Jean Paul Gaultier Scandal Absolu Pour Homme', price: '3,860,000đ', sizes: '1 Sizes', isNew: true, image: './images/products/jean-pauter.jpg' },
        { id: 4, brand: 'JEAN PAUL GAULTIER', name: 'Jean Paul Gaultier Scandal Absolu Pour Femme', price: '3,860,000đ', sizes: '1 Sizes', isNew: true, image: './images/products/jean-pauter2.jpg' },
        { id: 5, brand: 'HUGO BOSS', name: 'Hugo Boss Bottled Elixir', price: '2,860,000đ', sizes: '1 Sizes', isNew: true, image: './images/products/hugo-boss.jpg' },
        { id: 6, brand: 'JEAN PAUL GAULTIER', name: 'Jean Paul Gaultier Le Beau Paradise Garden', price: '2,590,000đ - 3,380,000đ', sizes: '2 Sizes', isNew: true, image: './images/products/jean-paul-gaultier-le-bea.jpg' },
        { id: 7, brand: 'JEAN PAUL GAULTIER', name: 'Jean Paul Gaultier Le Beau Paradise Garden', price: '2,590,000đ - 3,380,000đ', sizes: '2 Sizes', isNew: true, image: './images/products/argos-triumph.jpg' },
        { id: 8, brand: 'JEAN PAUL GAULTIER', name: 'Jean Paul Gaultier Le Beau Paradise Garden', price: '2,590,000đ - 3,380,000đ', sizes: '2 Sizes', isNew: true, image: './images/products/polo-red-parfum.jpg' },
    ];

    return (
        <section className="group1">
            <Container>
                <div className='heading'>
                    <h3>Nước Hoa Nam</h3>
                    <p>Xem thêm
                        <span>
                            <i class="fa-solid fa-angle-right"></i>
                        </span>
                    </p>
                </div>
                <Swiper
                    modules={[Navigation, Autoplay]}
                    navigation
                    spaceBetween={20}
                    slidesPerView={6}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        320: { slidesPerView: 2 },
                        640: { slidesPerView: 3 },
                        768: { slidesPerView: 4 },
                        1024: { slidesPerView: 6 }
                    }}
                    className="ItemSwiper"
                >
                    {products.map((product) => (
                        <SwiperSlide key={product.id}>
                            <div className="product-card">
                                {product.isNew && <div className="new-badge">New</div>}
                                <img src={product.image} alt={product.name} />
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

export default Group1;
