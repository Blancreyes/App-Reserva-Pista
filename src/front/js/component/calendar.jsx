import React, { useState } from "react";
export const Calendar = () => {
  const daysOfWeek = [
    "Lunes ",
    "Martes ",
    "Miercoles ",
    "Jueves ",
    "Viernes ",
    "Sabado ",
    "Domingo ",
  ];
  const hoursOfDay = [
    "9:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
  ];
  const currentWeek = new Date();
  const startOfWeek = new Date(
    currentWeek.getFullYear(),
    currentWeek.getMonth(),
    currentWeek.getDate() + 1 - currentWeek.getDay()
  );
  const endOfWeek = new Date(
    currentWeek.getFullYear(),
    currentWeek.getMonth(),
    currentWeek.getDate() - currentWeek.getDay() + 7
  );
  // Esta funcion recorre el array "day" y pinta la cabecera de la tabla
  const renderHeader = () => {
    const headerCells = daysOfWeek.map((day) => {
      return (
        <th className="border border-success " key={day}>
          <strong>{day}</strong>
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
    const rows = hoursOfDay.map((hour, index) => {
      const dayswithhour = daysOfWeek.map((dia) => {
        return (
          <td className="border-success rounded-4" key={dia}>
            <div key={dia + hour} className="rounded-4  border border-success">
              Free Hour {dia + hour}
            </div>
          </td>
        );
      });

      return (
        <tr key={hour}>
          <td className="border border-success">{hour}</td>
          <td className="border border-success rounded-4">{dayswithhour}</td>
        </tr>
      );
    });
    return <tbody>{rows}</tbody>;
  };
  return (
    // Basicamente este componente indica la semana en la que estamos y pinta una tabla
    <div>
      <h2>
        Semana: {startOfWeek.toDateString()}, {endOfWeek.toDateString()}
      </h2>
      {/* A la hora de pintar la tabla distinguimos primero pintando la cabecera y luego el resto de filas  */}
      <table className="table table-success border border-success m-auto w-75">
        {/* {renderHeader()} */}
        {renderRows()}
      </table>
    </div>
  );
};
