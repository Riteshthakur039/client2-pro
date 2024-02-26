// CatSlider.js

import React, { useEffect, useState, useRef, useContext } from 'react';
import Slider from 'react-slick';
import './style.css';
import { Link } from 'react-router-dom';

import { MyContext } from '../../App';

const CatSlider = ({ data }) => {
  const [totalLength, setTotalLength] = useState([]);
  const context = useContext(MyContext);
  const slider = useRef();

  useEffect(() => {
    // let catLength = 0;
    const lengthArr = data.map((item) => {
      return item.items.reduce((sum, subItem) => sum + subItem.products.length, 0);
    });
    setTotalLength(lengthArr);
  }, [data]);

  const itemBg = [
    '#fffceb',
    '#ecffec',
    '#feefea',
    '#fff3eb',
    '#fff3ff',
    '#f2fce4',
    '#feefea',
    '#fffceb',
    '#feefea',
    '#ecffec',
    '#feefea',
    '#fff3eb',
    '#fff3ff',
    '#f2fce4',
    '#feefea',
    '#fffceb',
    '#feefea',
    '#ecffec'
  ];

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 1,
    fade: false,
    arrows: context.windowWidth > 992 ? true : false,
    autoplay: context.windowWidth > 992 ? 2000 : false,
    centerMode: context.windowWidth > 992 ? true : false
  };

  return (
    <div className='catSliderSection'>
      <div className='container-fluid' ref={slider}>
        <h2 className='hd'>Featured Categories</h2>
        <Slider {...settings} className='cat_slider_Main' id='cat_slider_Main'>
          {data.map((item, index) => (
            <div className='item' key={index}>
              <Link to={`/cat/${item.cat_name.toLowerCase()}`}>
                <div className='info' style={{ background: itemBg[index] }}>
                  <img src={item.image} width='80' alt={`Category ${index + 1}`} />
                  <h5 className='text-capitalize mt-3'>{item.cat_name}</h5>
                  <p>{totalLength[index]} items</p>
                </div>
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CatSlider;
