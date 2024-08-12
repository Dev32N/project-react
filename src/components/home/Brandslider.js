import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import './brandslider.css';
import './desktopslider.css';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

export default function Brandslider() {
  const publicUrl = process.env.PUBLIC_URL;

  const listlogo = [
    { id: 1, src: `${publicUrl}/images/logo-gucci.png` },
    { id: 2, src: `${publicUrl}/images/logo-jean.png` },
    { id: 3, src: `${publicUrl}/images/logo-prada.png` },
    { id: 4, src: `${publicUrl}/images/logo-versace.png` },
    { id: 5, src: `${publicUrl}/images/logo-paco.png` },
    { id: 6, src: `${publicUrl}/images/logo-calvin.png` },
    { id: 7, src: `${publicUrl}/images/logo-burberry.png` },
    { id: 8, src: `${publicUrl}/images/logo-valentino.png` },
    { id: 9, src: `${publicUrl}/images/logo-viktor-rolf.png` },
    { id: 10, src: `${publicUrl}/images/logo-ralph.png` },
    { id: 11, src: `${publicUrl}/images/logo-armani.png` },
    { id: 12, src: `${publicUrl}/images/logo-chloe.png` },
  ];

  const branditems = [
    {
      key: 1,
      src: `${publicUrl}/images/brand_slider1.jpg`,
      alt: 'Brand 1'
    },
    {
      key: 2,
      src: `${publicUrl}/images/brand_slider2.jpg`,
      alt: 'Brand 2'
    },
    {
      key: 3,
      src: `${publicUrl}/images/brand_slider3.jpg`,
      alt: 'Brand 3'
    },
  ];

  return (
    <div className='contain'>
      <div className='heading'>
        <h3>Thương Hiệu</h3>
      </div>
      <div className='brcontain'>
        <div className='brandslider-container'>
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
        </div>
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
