import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";

export const Calendar = (props) => {
  const { store, actions } = useContext(Context);
  const [desactivado, setDesactivado] = useState(false);
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
    "09:00",
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
  async function handleBook(dia, hora) {
    console.log("A reservar:", dia, hora, "instalacion:", props.instalacion);
    let reservado = await actions.reservarPista(dia, hora, props.instalacion);

    if (reservado) {
      alert("Instalacion reservada");
      setDesactivado(true);
    } else alert("No pudo realizarse la reserva");
  }

  // Tomo las fechas para pintar el número de día del mes y la semana
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
        console.log(store.startTime?.includes(dia + hour));
        console.log(store.startTime);
        return (
          <td className="border-success rounded-4" key={dia}>
            <div
              onClick={() => handleBook(dia, hour)}
              key={dia + hour}
              className={
                store.startTime?.includes(dia + hour)
                  ? "btn btn-danger rounded-4"
                  : "btn btn-warning rounded-4"
              }
            >
              <strong>{dia + hour}</strong>
            </div>
          </td>
        );
      });

      return (
        <tr key={hour}>
          <td className="border border-success">
            <strong>{hour}</strong>
          </td>
          {dayswithhour}
        </tr>
      );
    });
    return <tbody>{rows}</tbody>;
  };
  useEffect(() => {
    actions.obtenerStartTime(props.instalacion);
  }, []);
  return (
    // Basicamente este componente indica la semana en la que estamos y pinta una tabla
    <div>
      <h2>
        Semana: {startOfWeek.toDateString()}, {endOfWeek.toDateString()}
      </h2>
      {/* A la hora de pintar la tabla distinguimos primero pintando la cabecera y luego el resto de filas  */}
      <table className="table table-success border border-success m-auto w-75">
        {renderHeader()}
        {renderRows()}
      </table>
    </div>
  );
};
