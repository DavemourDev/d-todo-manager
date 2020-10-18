import React, { useContext, useState } from "react";
import { TodoContext } from "../../context/TodoContext";
import { DICTIONARY_MAPPING } from "../../helpers/dictionary";


const ZoneWidget = () => {
  
  const [date, setDate] = useState<Date>(new Date());
  
  const context = useContext(TodoContext)
  const dictionary = DICTIONARY_MAPPING(context.settings.language)
  
  const GREETINGS = {
    morning: dictionary.goodMorning,
    noon: dictionary.goodEvening,
    evening: dictionary.goodEvening,
    night: dictionary.goodNight,
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