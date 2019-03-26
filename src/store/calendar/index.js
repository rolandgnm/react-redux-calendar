export const OPEN_EVENT_FORM = 'OPEN_EVENT_FORM';
export const CREATE_EVENT = 'CREATE_EVENT';

const initialState = {
  events: [],
  [OPEN_EVENT_FORM]: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case OPEN_EVENT_FORM:
      return { ...state, [OPEN_EVENT_FORM]: !state.OPEN_EVENT_FORM };

    case CREATE_EVENT:
      return { ...state, events: state.events.concat([payload]), [OPEN_EVENT_FORM]: false };

    default:
      return state;
  }
};
