import {
  OPEN_EVENT_FORM, CREATE_EVENT, OPEN_EDIT_EVENT, EDIT_EVENT,
} from '.';

export const toggleEventFormModal = () => ({
  type: OPEN_EVENT_FORM,
});

export const createEvent = event => ({
  type: CREATE_EVENT,
  payload: event,
});

export const openEditEvent = event => ({
  type: OPEN_EDIT_EVENT,
  payload: event.id,
});

export const editEvent = event => ({
  type: EDIT_EVENT,
  payload: event,
});
