import React from 'react';
import { Panel } from 'reactbulma';
import { connect } from 'react-redux';
import Modal from './Modal';
import EventForm from './EventForm';
import { OPEN_EVENT_FORM } from '../store/calendar';
import {
  createEvent, toggleEventFormModal, editEvent, deleteEvent,
} from '../store/calendar/actions';


const EventFormModal = ({
  isOpen, createEvent, onCloseModal, editingEvent, deleteEvent,
}) => (
  <Modal
    contentClassName="column is-full-mobile is-half-tablet is-one-third-desktop"
    isOpen={isOpen}
    onClose={onCloseModal}
  >
    <div>
      <Panel>
        <Panel.Heading>New Event</Panel.Heading>
        <Panel.Block style={{ backgroundColor: 'white' }}>
          <EventForm
            onSubmit={createEvent}
            event={editingEvent}
            onDeleteEvent={editingEvent && (() => { deleteEvent(editingEvent); })}
          />
        </Panel.Block>
      </Panel>
    </div>
  </Modal>
);

const getEventById = (events, id) => events.find(ev => ev.id === id);

const mStP = state => ({
  isOpen: state.calendar[OPEN_EVENT_FORM],
  editingEvent: getEventById(state.calendar.events, state.calendar.editingEvent),
});

const mDtP = {
  createEvent: (event) => {
    if (event.id) { return editEvent(event); }
    return createEvent(event);
  },
  onCloseModal: toggleEventFormModal,
  deleteEvent,
};

export default connect(mStP, mDtP)(EventFormModal);
