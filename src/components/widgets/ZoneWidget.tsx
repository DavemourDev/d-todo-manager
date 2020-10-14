import React, { useState } from "react";

const GREETINGS = {
  morning: "¡Buenos días!",
  noon: "¡Buenas tardes!",
  evening: "¡Buenas tardes!",
  night: "¡Buenas noches!",
};

const getGreeting = (date: Date) => {
  let h = date.getHours();
  let _greeting;
  if (h > 6 && h < 12) {
    _greeting = GREETINGS.morning;
  } else if (h >= 12 && h < 17) {
    _greeting = GREETINGS.noon;
  } else if (h >= 17 && h < 20) {
    _greeting = GREETINGS.evening;
  } else {
    _greeting = GREETINGS.night;
  }
  return _greeting;
}

const ZoneWidget = () => {

  const [date, setDate] = useState<Date>(new Date());

  setInterval(() => {
    setDate(new Date());
  }, 1000);

  return (
    <div className="panel">
      <h2 className="align-center">{`${getGreeting(date)} - ${new Date().toLocaleString('es-ES')}`}</h2>
    </div>
  );

}

export {ZoneWidget};