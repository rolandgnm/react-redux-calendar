import React from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import 'moment/locale/en-gb';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { connect } from 'react-redux';
import { openEditEvent } from '../store/calendar/actions';

moment.locale('en-gb');
const localizer = BigCalendar.momentLocalizer(moment);

const eventStyles = {
  Solo: { background: '#31ad9d' },
  Team: { background: '#5131ad' },
  Company: { background: '#3160ad' },
};

const Calendar = ({ events, openEditEvent }) => (
  <BigCalendar
    localizer={localizer}
    views={['month']}
    events={events}
    titleAccessor="name"
    startAccessor="date"
    endAccessor={event => moment(event.date).add(1, 'hour').toDate()}
    eventPropGetter={event => ({ style: eventStyles[event.state] })}
    popup
    selectable
    onSelectEvent={openEditEvent}
  />
);

const mStP = state => ({
  events: state.calendar.events,
});

const mDtP = {
  openEditEvent,
};

export default connect(mStP, mDtP)(Calendar);
