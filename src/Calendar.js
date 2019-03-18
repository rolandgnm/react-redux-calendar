import React  from "react";
import BigCalendar from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = BigCalendar.momentLocalizer(moment);

const Calendar = ({events = []}) => {

    return (
        <div className="App">
                <BigCalendar
                    localizer={localizer}
                    defaultDate={new Date()}
                    defaultView="month"
                    events={events}
                    style={{ height: "100vh" }}
                />
            </div>
        );
    }
    
export default Calendar;
