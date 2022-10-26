// const RESERVE_PROPERTY = 'property/housing/RESERVE_PROPERTY';
const GET_ROOMS = 'property/housing/GET_ROOMS';
const getRooms = async () => {
  const bearerToken = JSON.parse(localStorage.getItem('userInfo')).token;
  const response = await fetch('http://localhost:3000/rooms', {
    method: 'GET',
    headers: {
      Authorization: `${bearerToken}`,
    },
  });
  const data = await response.json();
  return data;
};

// Action Creator
const displayRooms = () => async (dispatch) => {
  const { rooms } = await getRooms();
  dispatch({
    type: GET_ROOMS,
    payload: rooms,
  });
};

const roomsReducer = (property = {}, action) => {
  if (action.type === GET_ROOMS) {
    return action.payload;
  }
  return property;
};

export { displayRooms, roomsReducer };
