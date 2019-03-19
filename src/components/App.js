import '@fortawesome/fontawesome-free/css/all.css';
import React from 'react';
import styled from 'styled-components';
import {
  Button, Icon, Container,
} from 'reactbulma';
import { connect } from 'react-redux';
import Calendar from './Calendar';
import { onNewEventClick } from '../store/calendar/actions';
import EventForm from './EventFormModal';

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

const FullHeightCalendar = styled(Calendar)`
  flex:1;
`;

const App = ({ events, onNewEventClick }) => (
  <Layout>
    <Header>
      <NewEventButton onClick={onNewEventClick} />
    </Header>
    <FullHeightCalendar style={{ height: 'unset' }} />
    <EventForm />
  </Layout>
);

const mStP = state => ({
  events: state.calendar.events,
});

const mDtP = {
  onNewEventClick,
};

export default connect(mStP, mDtP)(App);
