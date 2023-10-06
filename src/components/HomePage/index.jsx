import React from 'react';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';

import heroBanner01 from '../../images/hero-banner-01.jpg';
import heroBanner02 from '../../images/hero-banner-02.jpg';
import heroBanner03 from '../../images/hero-banner-03.jpg';

export const HomePage = () => {
  return (
    <section className='flex-shrink-0'>
      {/* Add the Bootstrap Carousel component */} 
      <Carousel>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src={heroBanner01}
            alt='First slide'
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Some text about the first slide.</p>
            <Button>Content Iteams</Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src={heroBanner02}
            alt='Second slide'
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Some text about the second slide.</p>
          </Carousel.Caption>
        </Carousel.Item>
        {/* Add more Carousel.Item components as needed */}
        <Carousel.Item>
          <img
            className='d-block w-100'
            src={heroBanner03}
            alt='Second slide'
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Some text about the second slide.</p>
          </Carousel.Caption>
        </Carousel.Item>
        {/* Add more Carousel.Item components as needed */}
      </Carousel>      
    </section>
  );
};

export default HomePage;
