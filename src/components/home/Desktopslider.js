import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import './desktopslider.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const items = [
  {
    key: 1,
    src: `${process.env.PUBLIC_URL}/images/cafe-slide/slide0.png`,
    alt: 'Slide0'
  },
  {
    key: 2,
    src: `${process.env.PUBLIC_URL}/images/cafe-slide/slide1.png`,
    alt: 'Slide1'
  },
  {
    key: 3,
    src: `${process.env.PUBLIC_URL}/images/cafe-slide/slide2.png`,
    alt: 'Slide2'
  },
  {
    key: 4,
    src: `${process.env.PUBLIC_URL}/images/cafe-slide/slide3.jpg`,
    alt: 'Slide3'
  },
  {
    key: 5,
    src: `${process.env.PUBLIC_URL}/images/cafe-slide/slide4.png`,
    alt: 'Slide4'
  },
  {
    key: 6,
    src: `${process.env.PUBLIC_URL}/images/cafe-slide/slide5.jpg`,
    alt: 'Slide5'
  }
];

export default function Desktopslider() {
  return (
    <div className="carousel-container">
      <Swiper
        spaceBetween={40}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {items.map((item) => (
          <SwiperSlide key={item.key}>
            <img src={item.src} alt={item.alt} style={{ width: "100%" }} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
