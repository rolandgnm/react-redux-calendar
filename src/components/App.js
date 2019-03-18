import '@fortawesome/fontawesome-free/css/all.css';
import React from 'react';
import styled from 'styled-components';
import { Button, Icon } from 'reactbulma';
import Calendar from './Calendar';
import { connect } from 'react-redux';
import { onNewEventClick } from '../store/calendar/actions';

const Header = styled.div`
  margin: 1em 0;
`;

const App = ({ events, onNewEventClick}) => (
  <div className="container">
    <Header>
      <Button primary onClick={onNewEventClick}>
        <Icon>
          <i className="fa fa-plus" />
        </Icon>
        <span>New Event</span>
      </Button>
    </Header>

    <Calendar />
  </div>
);

const mStP = (state) => ({
  events: state.calendar.events
})

const mDtP = {
  onNewEventClick
}

export default connect(mStP, mDtP)(App);
