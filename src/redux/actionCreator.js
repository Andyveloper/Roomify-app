// Actions
const GET_ROOMS = 'property/housing/GET_ROOMS';
const GET_RESERVATIONS = 'property/housing/GET_RESERVATIONS';
// Helper functions
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
const getReservations = async () => {
  const {rooms} = await getRooms();
  let firstId = rooms[0].id;
  const bearerToken = JSON.parse(localStorage.getItem('userInfo')).token;
  const response = await fetch(`http://localhost:3000/rooms/${firstId}/reservations`, {
    method: 'GET',
    headers: {
      Authorization: `${bearerToken}`,
    },
  });
  const data = await response.json();
  return data;
};

// Action Creators
const displayRooms = () => async (dispatch) => {
  const { rooms } = await getRooms();
  dispatch({
    type: GET_ROOMS,
    payload: rooms,
  });
};
const displayReservations = () => async (dispatch) => {
  const { reservations } = await getReservations();
  dispatch({
    type: GET_RESERVATIONS,
    payload: reservations,
  });
};

// Reducers
const roomsReducer = (property = {}, action) => {
  if (action.type === GET_ROOMS) {
    return action.payload;
  }
  return property;
};

const reservationsReducer = (property = {}, action) => {
  if (action.type === GET_RESERVATIONS) {
    return action.payload;
  }
  return property;
};

export { displayRooms, roomsReducer, displayReservations, reservationsReducer };
