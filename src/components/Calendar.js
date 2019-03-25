import React from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import 'moment/locale/en-gb';

import 'react-big-calendar/lib/css/react-big-calendar.css';

moment.locale('en-gb');
const localizer = BigCalendar.momentLocalizer(moment);

const Calendar = ({ events = [], ...props }) => (
  <BigCalendar
    localizer={localizer}
    defaultDate={new Date()}
    defaultView="month"
    views={['month']}
    events={events}
    {...props}
  />
);

export default Calendar;
