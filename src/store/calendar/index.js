export const OPEN_EVENT_FORM = 'OPEN_EVENT_FORM';
export const CREATE_EVENT = 'CREATE_EVENT';
export const OPEN_EDIT_EVENT = 'OPEN_EDIT_EVENT';
export const EDIT_EVENT = 'EDIT_EVENT';

const initialState = {
  events: [],
  [OPEN_EVENT_FORM]: false,
  editingEvent: null,
};

const generateId = () => Date.now() + Math.floor(Math.random() * 1000);

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case OPEN_EVENT_FORM:
      return { ...state, [OPEN_EVENT_FORM]: !state.OPEN_EVENT_FORM };

    case CREATE_EVENT:
      return {
        ...state,
        events: state.events.concat([{ id: generateId(), ...payload }]),
        [OPEN_EVENT_FORM]: false,
      };

    case EDIT_EVENT:
      return {
        ...state,
        editingEvent: null,
        events: state.events.map((event) => {
          if (event.id !== payload.id) {
            return event;
          }

          return { ...event, ...payload };
        }),
        [OPEN_EVENT_FORM]: false,
      };

    case OPEN_EDIT_EVENT:
      return {
        ...state,
        editingEvent: payload,
        [OPEN_EVENT_FORM]: true,
      };

    default:
      return state;
  }
};
