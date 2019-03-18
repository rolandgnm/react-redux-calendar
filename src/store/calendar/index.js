export const OPEN_EVENT_FORM = 'OPEN_EVENT_FORM'

const initialState = { 
  events: [],
  [OPEN_EVENT_FORM]: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case OPEN_EVENT_FORM:
      return { ...state, [OPEN_EVENT_FORM]: payload };

    default:
      return state;
  }
};
