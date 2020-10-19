import React, { useContext, useState } from "react";
import { TodoContext } from "../../context/TodoContext";
import { IDictionary } from "../../helpers/dictionary/IDictionary";

const ZoneWidget = () => {
  
  const [date, setDate] = useState<Date>(new Date());
  
  const context = useContext(TodoContext);
  const dictionary: IDictionary = context.dictionary;
  

  const getGreeting = (date: Date) => {
    let h = date.getHours();
    let _greeting;
    if (h > 6 && h < 12) {
      _greeting = dictionary.greetings.goodMorning;
    } else if (h >= 12 && h < 17) {
      _greeting = dictionary.greetings.goodAfternoon;
    } else if (h >= 17 && h < 20) {
      _greeting = dictionary.greetings.goodEvening;
    } else {
      _greeting = dictionary.greetings.goodNight;
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