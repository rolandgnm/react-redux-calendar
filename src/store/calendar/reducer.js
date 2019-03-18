
const initialState = { events: [] };

export default (state = initialState, { type, ...payload }) => {
  switch (type) {
    case 'CREATE_EVENT':
      return { ...state, ...payload };

    default:
      return state;
  }
};
