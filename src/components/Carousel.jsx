/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import responsive from './CarouselStyling';
import './carousel.css';
import { displayRooms } from '../redux/actionCreator';

const CarouselComp = () => {
  const dispatch = useDispatch();
  const rooms = useSelector((state) => state.rooms);
  useEffect(() => {
    dispatch(displayRooms());
  }, [dispatch]);
  console.log(rooms);
  return (
    <>
      {!rooms.length ? (<div>Loading...</div>)
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
              {rooms.map((ind) => (
                <React.Fragment key={ind.id}>
                  <div
                    className="image-carousel"
                    style={{ width: '100%', height: '100%' }}
                  >
                    <NavLink to="/reserve">
                      <img
                        src={ind.photo}
                        alt="rooms"
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
