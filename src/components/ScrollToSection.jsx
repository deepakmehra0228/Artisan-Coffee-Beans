// src/components/ScrollToSection.jsx

import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToSection = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        const id = pathname.split('/')[1]; // Extract section ID from the path
        if (id) {
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [pathname]);

    return null;
};

export default ScrollToSection;
