// const RESERVE_PROPERTY = 'property/housing/RESERVE_PROPERTY';
const SELECTED_PROPERTY = 'property/housing/SELECTED_PROPERTY';

// Action Creator
const addProperty = (data) => (dispatch) => {
  dispatch({
    type: SELECTED_PROPERTY,
    payload: data,
  });
};

const propertyToAddReducer = (property = {}, action) => {
  if (action.type === SELECTED_PROPERTY) {
    return action.payload;
  }
  return property;
};

export { addProperty, propertyToAddReducer };
