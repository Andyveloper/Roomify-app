// Actions
const GET_ROOMS = 'property/housing/GET_ROOMS';

const ADD_ROOM = 'property/housing/ADD_ROOM';
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
  const { rooms } = await getRooms();
  const firstId = rooms[0].id;
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

const addRooms = async (room) => {
  const bearerToken = JSON.parse(localStorage.getItem('userInfo')).token;
  const response = await fetch('http://localhost:3000/rooms', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `${bearerToken}`,
    },
    body: JSON.stringify(room),
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
const displayReservations = () => async (dispatch) => {
  const { reservations } = await getReservations();
  dispatch({
    type: GET_RESERVATIONS,
    payload: reservations,
  });
};

const addRoom = (newRoom) => async (dispatch) => {
  await addRooms(newRoom);
  dispatch({
    type: ADD_ROOM,
    payload: newRoom,
  });
};

const roomsReducer = (property = [], action) => {
  if (action.type === GET_ROOMS) {
    return action.payload;
  }
  if (action.type === ADD_ROOM) {
    return [
      ...property,
      action.payload,
    ];
  }
  return property;
};

const reservationsReducer = (property = {}, action) => {
  if (action.type === GET_RESERVATIONS) {
    return action.payload;
  }
  return property;
};

export {
  displayRooms, roomsReducer, displayReservations, reservationsReducer, addRoom,
};
