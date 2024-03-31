import React, { useState, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Cycle } from "../Cycle/Cycle";
import { Symptoms } from "../Symptoms/Symptoms";
import { Mood } from "../Mood/Mood";
import "./Home.scss"
import { EventsComponent } from "../Events/EventsComponent"


const localizer = momentLocalizer(moment);

export function Home() {
  const [cycle, setCycle] = useState(28); // Default cycle length
  const [moodMap, setMoodMap] = useState([]); // Map to store mood for each day
  const [periodMap, setPeriodMap] = useState([]);

  useEffect(() => {

  }, []);

  const fetchOvulationData = () => {

  }

  const fetchMoodData = () => {

  };

  const handleSelectSlot = (slotInfo) => {
    console.log('Add event');

  };

  return (
    <div className="home">
      <Calendar
        localizer={localizer}
        views={['month', 'agenda']} // Change views to 'month' and 'agenda'
        selectable={true}
        onSelectSlot={handleSelectSlot}
        longPressThreshold={10}
        events= {[]}
        components={{
          event: EventsComponent
        }}
      />
      <div className="home-params">
        <Cycle />
        <Symptoms />
        <Mood />
      </div>
      
    </div>
  );
}