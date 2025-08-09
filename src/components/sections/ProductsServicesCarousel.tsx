import React from 'react';
import Slider from 'react-slick';
import { ProductServiceItem } from '../../data/productsServices';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ProductsServicesCarousel.css';

interface ProductsServicesCarouselProps {
  items: ProductServiceItem[];
}

export function ProductsServicesCarousel({ items }: ProductsServicesCarouselProps) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: '0px',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {items.map((item) => (
          <div key={item.id} className="carousel-item-wrapper">
            <div className="carousel-item">
              <div className="flex items-center justify-center bg-slate-900 rounded-[72px] p-4 w-min mb-4">
                <img src={item.icon} alt="Icon" className="w-11 h-11 object-contain" />
              </div>
              <h4 className="text-slate-900 text-2xl font-medium leading-9 text-left">{item.title}</h4>
              <p className="text-slate-900 text-base leading-6 text-left opacity-80">{item.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}