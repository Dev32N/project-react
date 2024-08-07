import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import './group2.css';
import { Navigation, Autoplay } from 'swiper/modules';
import { Container } from 'reactstrap';

const Group2 = () => {

    const products = [
        { id: 1, brand: 'Afnan', name: 'Afnan Supremacy Silver', price: '1,380,000₫', sizes: '1 Sizes', image: './images/products/male/afnan-silver.jpg' },
        { id: 2, brand: 'Armaf', name: 'Armaf Club de Nuit Intense Man', price: '1,180,000₫', sizes: '1 Sizes', image: './images/products/male/armaf_club_de.jpg' },
        { id: 3, brand: 'Narciso Rodriguez', name: 'Narciso Rodriguez For Him Bleu Noir Eau de Parfum', price: '2,000,000₫', sizes: '1 Sizes', image: './images/products/male/bleu-edp.jpg' },
        { id: 4, brand: 'Versace', name: 'Versace Eros For Men', price: '1,680,000₫ - 3,200,000₫', sizes: '1 Sizes', image: './images/products/male/eros.jpg' },
        { id: 5, brand: 'Christian Dior', name: 'Dior Sauvage Eau de Parfum', price: '3,800,000₫', sizes: '1 Sizes', image: './images/products/male/dior-sauvage-eau-de.jpg' },
        { id: 6, brand: 'Christian Dior', name: 'Dior Sauvage Eau de Toilette', price: '3,650,000₫ - 2,250,000₫', sizes: '1 Sizes', image: './images/products/male/dior-sauvage-eau-de-toilette.jpg' },
        { id: 7, brand: 'Versace', name: 'Versace Pour Homme', price: '1,880,000₫ - 3,080,000₫', sizes: '1 Sizes', image: './images/products/male/versace-pour-homme_aa.jpg' },
        { id: 8, brand: 'Chanel', name: 'Chanel Bleu De Chanel Eau de Parfum', price: '4,350,000₫', sizes: '1 Sizes', image: './images/products/male/chanel-bleu-de-chanel-eau-de-parfum.jpg' },
        { id: 9, brand: 'Dolce & Gabbana', name: 'Dolce & Gabbana The One Eau de Parfum for Men', price: '3,500,000₫ - 1,950,000₫', sizes: '1 Sizes', image: './images/products/male/dolce-_-gabbana-the-one-for-men-eau-de-parfum-for-men_.jpg' },
        { id: 10, brand: 'Versace', name: 'Versace Eros Flame', price: '1,880,000₫ - 3,580,000₫', sizes: '1 Sizes', image: './images/products/male/eros-flame.jpg' },
        { id: 11, brand: 'Calvin Klein', name: 'Calvin Klein CK Free', price: '702,000₫ - 1,242,000₫', sizes: '1 Sizes', image: './images/products/male/calvin-klein-ck-free.jpg' },
        { id: 12, brand: 'Gucci', name: 'Gucci Guilty Pour Homme Eau de Parfum', price: '2,480,000₫ - 3,680,000₫', sizes: '1 Sizes', image: './images/products/male/gucci-guilty-edp.jpg' },
        { id: 13, brand: 'Chanel', name: 'Chanel Bleu De Chanel Parfum', price: '3,650,000₫ - 2,800,000₫', sizes: '1 Sizes', image: './images/products/male/chanel-bleu-de-chanel-parfum_.jpg' },
        { id: 14, brand: 'Gucci', name: 'Gucci Guilty Pour Homme', price: '2,680,000₫ - 3,250,000₫', sizes: '1 Sizes', image: './images/products/male/gucci-guilty-pour-homme.jpg' },
        { id: 15, brand: 'Calvin Klein', name: 'Calvin Klein CK All', price: '1,000,000₫ - 1,580,000₫', sizes: '1 Sizes', image: './images/products/male/calvin-klein-ck-all.jpg' },
        { id: 16, brand: 'Yves Saint Laurent', name: 'Yves Saint Laurent Y Eau de Parfum', price: '3,500,000₫', sizes: '1 Sizes', image: './images/products/male/yves-saint-laurent-y-eau-de.jpg' },
    ];

    return (
        <section className="group2">
            <Container>
                <div className='heading animation-tran'>
                    <h3 className='site-animation'>Nước Hoa Nam</h3>
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
                        delay: 3200,
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

export default Group2;
