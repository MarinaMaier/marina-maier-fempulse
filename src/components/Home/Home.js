import React, { useState, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { BASE_URL } from "../../utils/constant-variables";
import { Header } from '../Header/Header';
import "./Home.scss";
import { EventsComponent } from "../Events/EventsComponent";
import { EventModal } from "../EventModal/EventModal";
import axiosInstance from "../../utils/axios-interceptor";

const localizer = momentLocalizer(moment);

export function Home() {
  const [events, setEvents] = useState([])
  const [invokeEventModal, setInvokeEventModal] = useState(false);
  const [selectedEvents, setSelectedEvents] = useState([]);
  const [eventsId, setEventsId] = useState(null);
  const [selectedDate, setSelectedDate] = useState(moment());
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const getEvents = async () => {
      try {
        const allEvents =  await axiosInstance.get(`${BASE_URL}/home/calendar/${moment(selectedDate).format('MMYYYY')}`);
        setEventsId(allEvents?.data?.id)
        setEvents(JSON.parse(allEvents?.data?.events));
      } catch (error) {
        setEventsId(null)
        setEvents([]);
        setHasError(true);
      }
    }
    getEvents();
  }, [selectedDate]);

  const handleViewChange = (date) => {
    setSelectedDate(date);
  }

  const clickClose = (e) => {
    onEventsChange(e);
    setSelectedEvents([]);
    setInvokeEventModal(false);
  };

  const handleSelectSlot = (slotInfo) => {
    if (moment(slotInfo.start).isAfter(moment())) {
      return;
    }
    const event = events.filter((event) => (moment(event.start).isSame(slotInfo.start, 'day')));
    event.start = slotInfo.start;
    event.end = slotInfo.end;
    setSelectedEvents(event);
    setEvents(events.filter((event) => !(moment(event.start).isSame(slotInfo.start, 'day'))))
    setInvokeEventModal(true);
  };

  const onEventsChange = async (e) => {
    try {
      const allEvents =  await axiosInstance.post(`${BASE_URL}/home/calendar/${moment(selectedDate).format('MMYYYY')}`,{
        id: eventsId || '',
        events: JSON.stringify([...events, ...e])
      });
      setEvents(JSON.parse(allEvents.data.events))
    } catch (error) {
      setHasError(true);
    }
  }

  return (
    
    <div className="home">
      <Header />
      <Calendar
        localizer={localizer}
        views={["month", "agenda"]} // Change views to 'month' and 'agenda'
        selectable={true}
        onSelectSlot={handleSelectSlot}
        onSelectEvent={handleSelectSlot}
        longPressThreshold={10}
        events={events}
        defaultDate={moment()}
        onNavigate={handleViewChange}
        components={{
          event: EventsComponent,
        }}
      />
      <div className="home-params">
      </div>
      {invokeEventModal && <EventModal selectedEvents={selectedEvents} clickClose={clickClose} />}
    </div>
  );
}
