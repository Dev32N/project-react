import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import './group3.css';
import { Navigation, Autoplay } from 'swiper/modules';
import { Container } from 'reactstrap';

const Group3 = () => {
    const products = [
        { id: 1, brand: 'Burberry', name: 'Burberry Garden Roses', price: '6,500,000₫', sizes: '1 Sizes', image: './images/products//female/burberry-garden.jpg' },
        { id: 2, brand: 'Creed', name: 'Creed Aventus for Her', price: '3,860,000đ', sizes: '1 Sizes', image: './images/products/female/creed-aventus.jpg' },
        { id: 3, brand: 'Etienne Aigner', name: 'Etienne Aigner Debut', price: '1,304,000₫', sizes: '1 Sizes', image: './images/products/female/debut.jpg' },
        { id: 4, brand: 'Gucci', name: 'Gucci Mémoire d`’`une Odeur for women and men', price: '2,500,000₫ - 2,800,000₫', sizes: '1 Sizes', image: './images/products/female/gucci-memoire.jpg' },
        { id: 5, brand: 'Maison Francis Kurkdjian', name: 'Maison Francis Kurkdjian Baccarat Rouge 540 EDP', price: '4,880,000₫ - 7,500,000₫', sizes: '1 Sizes', image: './images/products/female/maison-francis.jpg' },
        { id: 6, brand: 'Salvatore Ferragamo', name: 'Salvatore Ferragamo Oceani di Seta', price: '2,590,000đ - 3,380,000đ', sizes: '1 Sizes', image: './images/products/female/salvatore-ferragamo.jpg' },
        { id: 7, brand: 'DSQUARED2', name: 'DSQUARED2 Wood for Her', price: '1,380,000₫ - 1,850,000₫', sizes: '1 Sizes', image: './images/products/female/wood_for_her_dsquared.jpg' },
        { id: 8, brand: 'Creed', name: 'Creed Love in Black', price: '6,660,000₫', sizes: '1 Sizes', image: './images/products/female/ove-in-blck.jpg' },
        { id: 9, brand: 'Marc Jacobs', name: 'Marc Jacobs Perfect Intense', price: '2,800,000₫ - 3,200,000₫', sizes: '1 Sizes', image: './images/products/female/perfect-intense.jpg' },
        { id: 10, brand: 'Initio Parfums Prives', name: 'Initio Parfums Prives Side Effect', price: '6,000,000₫ - 6,500,000₫', sizes: '1 Sizes', image: './images/products/female/side-ef.jpg' },
        { id: 11, brand: 'Prada', name: 'Prada Candy', price: '2,900,000₫', sizes: '1 Sizes', image: './images/products/female/side-ef.jpg' },
        { id: 12, brand: 'Manos Gerakinis', name: 'Manos Gerakinis Sillage Royal', price: '6,800,000₫', sizes: '1 Sizes', image: './images/products/female/quintenssen.jpg' },
        { id: 13, brand: 'Manos Gerakinis', name: 'Manos Gerakinis Rose Poetique', price: '5,600,000₫', sizes: '1 Sizes', image: './images/products/female/rose.jpg' },
        { id: 14, brand: 'Memo Paris', name: 'Memo Paris Sintra', price: '5,337,000₫', sizes: '1 Sizes', image: './images/products/female/memo-paris-sintra.jpg' },
        { id: 15, brand: 'Manos Gerakinis', name: 'Manos Gerakinis Quintessence', price: '8,830,000₫', sizes: '1 Sizes', image: './images/products/female/quintenssen.jpg' },
        { id: 16, brand: 'Dolce & Gabbana', name: 'Dolce & Gabbana Dolce Lily', price: '1,870,000₫ - 2,125,000₫', sizes: '1 Sizes', image: './images/products/female/dolce-lily.jpg' },
    ];

    return (
        <section className="group3">
            <Container >
                <div className='heading animation-tran'>
                    <h3 className='site-animation'>Nước Hoa Nữ</h3>
                    <p className='site-animation'>Xem thêm
                        <span>
                            <i class="fa-solid fa-angle-right"></i>
                        </span>
                    </p>
                </div>
                <Swiper 
                    modules={[Navigation, Autoplay]}
                    navigation
                    spaceBetween={0}
                    slidesPerView={6}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        320: { slidesPerView: 2 },
                        640: { slidesPerView: 3 },
                        768: { slidesPerView: 3 },
                        1024: { slidesPerView: 6 }
                    }}
                    className="ItemSwiper animation-tran"
                >
                    {products.map((product) => (
                        <SwiperSlide key={product.id}>
                            <div className="product-card site-animation">
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

export default Group3;
