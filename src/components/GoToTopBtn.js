import React, { useState, useEffect } from 'react';
import "./goToTop.css"
const GoToTopBtn = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 700) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        visible && (
            <button
                className='go-to-top'
                style={{
                    position: 'fixed',
                    bottom: '100px',
                    right: '40px',
                    display: visible ? 'block' : 'none',
                }}
                onClick={scrollToTop}
                color="primary"
            >
            <i class="fa-solid fa-chevron-up"></i>
            </button>
        )
    );
};

export default GoToTopBtn;
