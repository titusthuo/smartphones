import check from '../assets/check.svg';
import star from '../assets/star.svg';
import tech12 from '../assets/tech-12.png';
import tech11 from '../assets/tech-11.png';
import tech10 from '../assets/tech-10.png';

import AOS from "aos";
import "aos/dist/aos.css";

// init AOS animation
AOS.init({
    duration: 1000,
    offset: 100,
});

const trendingSmartphones = [
    'Samsung S24 Ultra',
    'iPhone',
    'Huawei Nova Series',
    'Infinix Zero X Pro',
    'Nokia',
    'Tecno'
];

const trendingDrinks = [
    'Samsung S24 Ultra',
    'iPhone',
    'Huawei Nova Series',
    'Infinix Zero X Pro',
    'Nokia',
    'Tecno'
];

const cards = [{
        imgSrc: tech12,
        alt: 'tech-12',
        title: 'Samsung Galaxy S4',
        rating: '4.9',
        price: '$579'
    },
    {
        imgSrc: tech11,
        alt: 'tech-11',
        title: 'Infinix Note 30',
        rating: '5.0',
        price: '$205',
        active: true
    },
    {
        imgSrc: tech10,
        alt: 'tech-10',
        title: 'iPhone 15 Pro',
        rating: '4.7',
        price: '$800'
    }
];