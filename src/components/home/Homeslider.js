import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../home/homeslider.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const items = [
    {
        key: 1,
        src: `${process.env.PUBLIC_URL}/images/slideshow_1.jpg`,
        alt: 'Slide 1'
    },
    {
        key: 2,
        src: `${process.env.PUBLIC_URL}/images/slideshow_2.jpg`,
        alt: 'Slide 2'
    },
    {
        key: 3,
        src: `${process.env.PUBLIC_URL}/images/slideshow_3.jpg`,
        alt: 'Slide 3'
    },
    {
        key: 4,
        src: `${process.env.PUBLIC_URL}/images/slideshow_4.jpg`,
        alt: 'Slide 4'
    },
    {
        key: 5,
        src: `${process.env.PUBLIC_URL}/images/slideshow_5.jpg`,
        alt: 'Slide 5'
    }
];

export default function Homeslider() {
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
