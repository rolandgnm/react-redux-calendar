import React from 'react';
import { Panel } from 'reactbulma';
import Modal from './Modal';
import EventForm from './EventForm';

const EventFormModal = ({ isOpen, onSubmit }) => (
  <Modal isOpen={isOpen}>
    <div className="column is-full-mobile is-half-tablet is-one-third-desktop">
      <Panel>
        <Panel.Heading>
          New Event
        </Panel.Heading>
        <Panel.Block style={{ backgroundColor: 'white' }}>
          <EventForm onSubmit={onSubmit} />
        </Panel.Block>
        {/* <Panel.Footer /> */}
      </Panel>
    </div>
  </Modal>
);

export default EventFormModal;
