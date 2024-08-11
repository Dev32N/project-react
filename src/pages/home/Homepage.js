import React, { useEffect } from 'react'
import Desktopslider from '../../components/home/Desktopslider'
import Brandslider from '../../components/home/Brandslider'
import About1989 from '../../components/home/About1989'
import Group1 from '../../components/home/groupproducts/Group1'
import Footer from '../../components/footer/Footer'
import Header from '..//..//components/header/Header'
import Group2nam from '../../components/home/groupproducts/Group2nam'
import Group3nu from '../../components/home/groupproducts/Group3nu'
import GoToTopBtn from '../../components/GoToTopBtn'
import './homepage.css'


export default function Homepage() {
  useEffect(() => {
    const handleScroll = () => {
        const elements = document.querySelectorAll('.animation-tran');
        elements.forEach(element => {
            const rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom >= 0) {
                if (!element.classList.contains('active')) {
                    element.classList.add('active');
                }
            }
        });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}, []);
  return (
    <div>
      <Header />
      <Desktopslider />
      <Brandslider />
      <Group1 />
      <Group2nam />
      <Group3nu />
      <About1989 />
      <GoToTopBtn />
      <Footer/>
    </div>
  )
}
