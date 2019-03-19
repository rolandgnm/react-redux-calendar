import React from 'react';
import { Panel } from 'reactbulma';
import Modal from './Modal';

const EventFormModal = ({ isOpen = true }) => (
  <Modal isOpen={isOpen}>
    <div className="column is-full-mobile is-half-tablet is-one-third-desktop">
      <Panel>
        <Panel.Heading>
        New Event
        </Panel.Heading>
        <Panel.Block style={{ backgroundColor: 'white' }}>

        </Panel.Block>
      </Panel>
    </div>
  </Modal>
);

export default EventFormModal;
