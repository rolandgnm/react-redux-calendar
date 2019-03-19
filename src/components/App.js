import '@fortawesome/fontawesome-free/css/all.css';
import React from 'react';
import styled from 'styled-components';
import {
  Button, Icon, Container,
} from 'reactbulma';
import { connect } from 'react-redux';
import Calendar from './Calendar';
import { onNewEventClick } from '../store/calendar/actions';

const Layout = styled(Container)`
  height: 100%;
  display: flex;
  flex-direction: column; 
`;

const Header = styled.div`
  margin: 1em 0;
`;

const FullHeightCalendar = styled(Calendar)`
  flex:1;
`;

const App = ({ events, onNewEventClick }) => (
  <Layout>
    <Header>
      <Button primary onClick={onNewEventClick}>
        <Icon>
          <i className="fa fa-plus" />
        </Icon>
        <span>New Event</span>
      </Button>
    </Header>
    <FullHeightCalendar style={{ height: 'unset' }} />
  </Layout>
);

const mStP = state => ({
  events: state.calendar.events,
});

const mDtP = {
  onNewEventClick,
};

export default connect(mStP, mDtP)(App);
