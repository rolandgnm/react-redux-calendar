import '@fortawesome/fontawesome-free/css/all.css';
import React from 'react';
import styled from 'styled-components';
import {
  Button, Icon, Container,
} from 'reactbulma';
import { connect } from 'react-redux';
import Calendar from './Calendar';
import { toggleEventFormModal } from '../store/calendar/actions';
import EventFormModal from './EventFormModal';

const Layout = styled(Container)`
  height: 100%;
  display: flex;
  flex-direction: column; 
`;

const Header = styled.div`
  margin: 1em 0;
`;

const NewEventButton = props => (
  <Button primary {...props}>
    <Icon>
      <i className="fa fa-plus" />
    </Icon>
    <span>New Event</span>
  </Button>
);

const CalendarContainer = styled.div`
  flex:1;
  margin-bottom: 1em;
`;

const App = ({ events, onNewEventClick }) => (
  <Layout>
    <Header>
      <NewEventButton onClick={onNewEventClick} />
    </Header>
    <CalendarContainer style={{ height: 'unset' }}>
      <Calendar />
    </CalendarContainer>
    <EventFormModal />
  </Layout>
);

const mStP = state => ({
  events: state.calendar.events,
});

const mDtP = {
  onNewEventClick: toggleEventFormModal,
};

export default connect(mStP, mDtP)(App);
