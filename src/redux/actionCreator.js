// Actions
const GET_ROOMS = 'property/housing/GET_ROOMS';
const ADD_ROOM = 'property/housing/ADD_ROOM';
const REMOVE_ROOM = 'property/housing/REMOVE_ROOM';
const GET_RESERVATIONS = 'property/housing/GET_RESERVATIONS';
const GET_ROOM_ID = 'property/housing/GET_ROOM_ID';
// Helper functions

const getRooms = async () => {
  const bearerToken = JSON.parse(localStorage.getItem('userInfo')).token;
  const response = await fetch('https://roomifybe.fly.dev/rooms', {
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
  const response = await fetch(`https://roomifybe.fly.dev/rooms/${firstId}/reservations`, {
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
  const response = await fetch('https://roomifybe.fly.dev/rooms', {
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

const removeRoom = async (id) => {
  const bearerToken = JSON.parse(localStorage.getItem('userInfo')).token;
  await fetch(`https://roomifybe.fly.dev/rooms/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `${bearerToken}`,
    },
  });
};

// Action Creator

const getRoomId = (id) => ({
  type: GET_ROOM_ID,
  payload: id,
});

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

const deleteRoom = (id) => async (dispatch) => {
  await removeRoom(id);
  dispatch({
    type: REMOVE_ROOM,
    payload: id,
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
  if (action.type === REMOVE_ROOM) {
    const newArrayRoom = property.filter((room) => room.id !== action.payload);
    return newArrayRoom;
  }
  return property;
};

const reservationsReducer = (property = {}, action) => {
  if (action.type === GET_RESERVATIONS) {
    return action.payload;
  }
  return property;
};

const idReducer = (property = 0, action) => {
  if (action.type === GET_ROOM_ID) {
    return action.payload;
  }
  return property;
};

export {
  displayRooms,
  getRoomId,
  roomsReducer,
  displayReservations,
  reservationsReducer,
  addRoom,
  deleteRoom,
  idReducer,
};
