import React from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import 'moment/locale/en-gb';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { connect } from 'react-redux';

moment.locale('en-gb');
const localizer = BigCalendar.momentLocalizer(moment);

const Calendar = ({ events }) => (
  <BigCalendar
    localizer={localizer}
    views={['month']}
    events={events}
    titleAccessor="name"
    startAccessor="date"
    endAccessor={event => moment(event.date).add(1, 'hour').toDate()}
    popup
  />
);

const mStP = state => ({
  events: state.calendar.events,
});

const mDtP = {

};

export default connect(mStP, mDtP)(Calendar);
