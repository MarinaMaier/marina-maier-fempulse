import React, { useState, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Cycle } from "../Cycle/Cycle";
import { Symptoms } from "../Symptoms/Symptoms";
import { Mood } from "../Mood/Mood";
import "./Home.scss";
import { EventsComponent } from "../Events/EventsComponent";
import { EventModal } from "../EventModal/EventModal";
import axios from "axios";

const localizer = momentLocalizer(moment);

export function Home() {
  const [cycle, setCycle] = useState(28); // Default cycle length
  const [events, setEvents] = useState([
    {
      start: moment(),
      end: moment(),
      title: "Mood",
      subTitle: "Happy",
    },
    {
      start: moment(),
      end: moment(),
      title: "Period",
      subTitle: "Period",
    },
  ])
  const [invokeEventModal, setInvokeEventModal] = useState(false);
  const [selectedEvents, setSelectedEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const getEvents = async () => {
      try {
        const allEvents =  await axios.get(`http://localhost:8080/home`);
        //setEvents(allEvents.data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setHasError(true);
      }
    }
    getEvents();
  }, []);

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
      //const allEvents =  await axios.post(`http://localhost:8080/home`, JSON.stringify([...events, ...e]));
      setEvents([...events, ...e]);
    } catch (error) {
      setHasError(true);
    }
  }

  return (
    <div className="home">
      <Calendar
        localizer={localizer}
        views={["month", "agenda"]} // Change views to 'month' and 'agenda'
        selectable={true}
        onSelectSlot={handleSelectSlot}
        longPressThreshold={10}
        events={events}
        components={{
          event: EventsComponent,
        }}
      />
      <div className="home-params">
        <Cycle />
        <Symptoms />
        <Mood />
      </div>
      {invokeEventModal && <EventModal selectedEvents={selectedEvents} clickClose={clickClose} />}
    </div>
  );
}
