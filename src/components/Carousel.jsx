/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Axios from 'axios';
import responsive from './CarouselStyling';
import './carousel.css';
import { addProperty } from '../redux/actionCreator';

const CarouselComp = () => {
  const [pictures, setPictures] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    const apiKey = '30748294-b32c0b587bb743f77a631dffb';
    (async () => {
      const { data } = await Axios.get(`https://pixabay.com/api/?key=${apiKey}`);
      setPictures(data.hits);
    })();
  }, [pictures]);

  const onClick = (data) => {
    dispatch(addProperty(data));
  };

  return (
    <>
      {!pictures.length ? (<div>Loading...</div>)
        : (
          <>
            <Carousel
              responsive={responsive}
              infinite
              autoPlay="desktop"
              autoPlaySpeed={4000}
              keyBoardControl
              transitionDuration={500}
              containerClass="carousel-container"
              itemClass
              centerMode
              slidesToSlide={3}
              arrows
              showDots
              renderButtonGroupOutside={false}
            >
              {pictures.map((ind) => (
                <React.Fragment key={ind.id}>
                  <div
                    className="image-carousel"
                    style={{ width: '100%', height: '100%' }}
                  >
                    <NavLink to="/reserve">
                      <img
                        onClick={() => onClick(ind)}
                        src={ind.previewURL}
                        alt={ind.type}
                      />
                    </NavLink>
                  </div>
                </React.Fragment>
              ))}
            </Carousel>
          </>
        )}
    </>
  );
};

export default CarouselComp;
