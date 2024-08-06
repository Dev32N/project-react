import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import './brandslider.css';
import './desktopslider.css';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

export default function Brandslider() {
  const listlogo = [
    { id: 1, src: '/images/logo-gucci.png' },
    { id: 2, src: '/images/logo-jean.png' },
    { id: 3, src: '/images/logo-prada.png' },
    { id: 4, src: '/images/logo-versace.png' },
    { id: 5, src: '/images/logo-paco.png' },
    { id: 6, src: '/images/logo-calvin.png' },
    { id: 7, src: '/images/logo-burberry.png' },
    { id: 8, src: '/images/logo-valentino.png' },
    { id: 9, src: '/images/logo-viktor-rolf.png' },
    { id: 10, src: '/images/logo-ralph.png' },
    { id: 11, src: '/images/logo-armani.png' },
    { id: 12, src: '/images/logo-chloe.png' },
  ];

  const branditems = [
    {
      key: 1,
      src: '/images/brand_slider1.jpg',
      alt: 'Brand 1'
    },
    {
      key: 2,
      src: '/images/brand_slider2.jpg',
      alt: 'Brand 2'
    },
    {
      key: 3,
      src: '/images/brand_slider3.jpg',
      alt: 'Brand 3'
    },
  ];

  return (
    <div className='contain'>
      <div className='heading'>
        <h3>Thương Hiệu</h3>
      </div>
      <div className='brcontain'>
        <Container className='brandslider-container'>
          <div className="carouselbrand">
            <Swiper
              spaceBetween={0}
              slidesPerView={1}
              loop={true}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
              className="brandslide"
            >
              {branditems.map((item) => (
                <SwiperSlide key={item.key}>
                  <img src={item.src} alt={item.alt} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </Container>
        <div className='listbrand'>
            {listlogo.map((item) => (
              <div key={item.id} className='brand-logo'>
                <img src={item.src} alt={`Logo ${item.id}`} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
