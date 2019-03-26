import React from 'react';
import { Panel } from 'reactbulma';
import { connect } from 'react-redux';
import Modal from './Modal';
import EventForm from './EventForm';
import { OPEN_EVENT_FORM } from '../store/calendar';
import { createEvent } from '../store/calendar/actions';


const EventFormModal = ({ isOpen, createEvent }) => (
  <Modal isOpen={isOpen}>
    <div className="column is-full-mobile is-half-tablet is-one-third-desktop">
      <Panel>
        <Panel.Heading>New Event</Panel.Heading>
        <Panel.Block style={{ backgroundColor: 'white' }}>
          <EventForm onSubmit={createEvent} />
        </Panel.Block>
      </Panel>
    </div>
  </Modal>
);

const mStP = state => ({
  isOpen: state.calendar[OPEN_EVENT_FORM],
});

const mDtP = {
  createEvent,
};

export default connect(mStP, mDtP)(EventFormModal);
