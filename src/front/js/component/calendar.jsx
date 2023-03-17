import React, { useState } from "react";

const WeeklySchedule = () => {
  const [events, setEvents] = useState([
    { title: "Meeting", start_time: "9:00am", end_time: "10:00am" },
    { title: "Lunch", start_time: "12:00pm", end_time: "1:00pm" },
    { title: "Conference Call", start_time: "2:00pm", end_time: "3:30pm" },
  ]);

  const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const hoursOfDay = [
    "9:00am",
    "10:00am",
    "11:00am",
    "12:00pm",
    "1:00pm",
    "2:00pm",
    "3:00pm",
    "4:00pm",
    "5:00pm",
    "6:00pm",
    "7:00pm",
    "8:00pm",
    "9:00pm",
    "10:00pm",
    "11:00pm",
  ];

  const currentWeek = new Date();
  const startOfWeek = new Date(
    currentWeek.getFullYear(),
    currentWeek.getMonth(),
    currentWeek.getDate() - currentWeek.getDay()
  );
  const endOfWeek = new Date(
    currentWeek.getFullYear(),
    currentWeek.getMonth(),
    currentWeek.getDate() - currentWeek.getDay() + 6
  );

  const renderHeader = () => {
    const headerCells = daysOfWeek.map((day) => {
      return <th key={day}>{day}</th>;
    });

    return (
      <thead>
        <tr>
          <th></th>
          {headerCells}
        </tr>
      </thead>
    );
  };

  const renderRows = () => {
    const rows = hoursOfDay.map((hour, index) => {
      const rowCells = [];

      for (let i = 0; i < 7; i++) {
        const eventsForDay = events.filter((e) => {
          const startTime = new Date(
            startOfWeek.getFullYear(),
            startOfWeek.getMonth(),
            startOfWeek.getDate() + i,
            hour.split(":")[0],
            hour.split(":")[1]
          ).getTime();
          const endTime = new Date(
            startOfWeek.getFullYear(),
            startOfWeek.getMonth(),
            startOfWeek.getDate() + i,
            e.end_time.split(":")[0],
            e.end_time.split(":")[1]
          ).getTime();

          return (
            startTime >= startOfWeek.getTime() && endTime <= endOfWeek.getTime()
          );
        });

        rowCells.push(
          <td key={i}>
            {eventsForDay.map((event, index) => (
              <div key={index} className="event">
                {event.title}
              </div>
            ))}
          </td>
        );
      }

      return (
        <tr key={hour}>
          <td>{hour}</td>
          {rowCells}
        </tr>
      );
    });

    return <tbody>{rows}</tbody>;
  };

  return (
    <table className="weekly-schedule">
      {renderHeader()}
      {renderRows()}
    </table>
  );
};

export default WeeklySchedule;
