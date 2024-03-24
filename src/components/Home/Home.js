import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";


const localizer = momentLocalizer(moment);

export function Home() {
  return (
    <div className="Home">
      <Calendar
        localizer={localizer}
        events={[]}
        startAccessor="start"
        endAccessor="end"
        views={['week', 'month']}
        style={{ height: 500 }}
      />
    </div>
  );
}
