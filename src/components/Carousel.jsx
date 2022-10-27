/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { CircularProgress } from '@mui/material';
import responsive from './CarouselStyling';
import './carousel.css';

import { displayRooms } from '../redux/actionCreator';

const CarouselComp = () => {
  const dispatch = useDispatch();
  const rooms = useSelector((state) => state.rooms);
  useEffect(() => {
    dispatch(displayRooms());
  }, [dispatch]);
  return (
    <>
      {!rooms.length ? (
        <div className="center">
          <CircularProgress color="secondary" />
        </div>
      )
        : (
          <section className="main-section">
            <div className="header-desc">
              <h1>Latest Designed Rooms</h1>
              <small>Please select your choice</small>
            </div>
            <Carousel
              responsive={responsive}
              infinite
              autoPlay="desktop"
              autoPlaySpeed={4000}
              keyBoardControl
              transitionDuration={500}
              containerClass="carousel-container"
              centerMode
              slidesToSlide={1}
              arrows
              showDots
            >
              {rooms.map((ind) => (
                <React.Fragment key={ind.id}>
                  <div
                    className="image-carousel"
                  >
                    <NavLink to="/reserve">
                      <img
                        className="ind-image"
                        src={ind.photo}
                        alt="rooms"
                      />
                    </NavLink>

                    <h4 className="card-h4">{ind.name}</h4>
                    <p className="card-para">{ind.description.length > 100 ? `${ind.description.slice(0, 200)}...` : ind.description }</p>
                  </div>
                </React.Fragment>
              ))}
            </Carousel>
          </section>
        )}
    </>
  );
};

export default CarouselComp;
