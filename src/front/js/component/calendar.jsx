
import React, { useState } from 'react';

export const horario = () => {
  const [books2Paint, setbooks2Paint] = useState([
    { title: 'Meeting', start_time: '9:00am', end_time: '10:00am' },
    { title: 'Lunch', start_time: '12:00pm', end_time: '1:00pm' },
    { title: 'Conference Call', start_time: '2:00pm', end_time: '3:30pm' },
  ]);

  const renderHeader = () => {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const headerCells = daysOfWeek.map(day => {
      return (
        <th key={day}>
          {day}
        </th>
      );
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
    const hoursOfDay = ['9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', '8:00pm', '9:00pm', '10:00pm', '11:00pm'];

    const rows = hoursOfDay.map((hour, index) => {
      const rowCells = [];

      for (let i = 0; i < 7; i++) {
        const event = events.find(e => {
          const startTime = new Date(`2023-03-${i+13}))
      }      
  } )  
        }