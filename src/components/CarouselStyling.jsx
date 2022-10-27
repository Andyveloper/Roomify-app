/* eslint-disable no-param-reassign */
const responsive = {
  desktop: {
    breakpoint: { max: 1400, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 900, min: 600 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 1,
  },
};

// const getAverageRGB = (img) => {
//   const colorThief = new ColorThief();
//   const result = colorThief.getColor(img);
//   console.log(result);
// };

// export { getAverageRGB };
export default responsive;
