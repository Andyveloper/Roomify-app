/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import { displayRooms } from '../redux/actionCreator';
const CarouselComp = () => {
// const dispatch = useDispatch();
  const rooms = useSelector((state) => state.rooms);
  // useEffect(() => {
  //   dispatch(displayRooms());
  // }, [dispatch]);
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1224,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };
  return (
    <>
      <div className="slider-container">
        <h1>All Rooms</h1>
        <div className="slider">
          {/* eslint-disable-next-line */}
          <Slider {...settings}>
            {rooms.map((room) => (
              <div key={Math.round(Math.random)} className="room-card">
                <div className="photo-container">
                  <Link to={`/rooms/${room.id}/details`}>
                    <img src={room.photo} alt="room" className="room-photo" />
                  </Link>
                </div>
                <div className="card-info">
                  <h3>{room.name}</h3>
                  <p>{room.description}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};
export default CarouselComp;
