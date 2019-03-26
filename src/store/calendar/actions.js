import { OPEN_EVENT_FORM, CREATE_EVENT } from '.';

export const toggleEventFormModal = () => ({
  type: OPEN_EVENT_FORM,
});

export const createEvent = event => ({
  type: CREATE_EVENT,
  payload: event,
});
