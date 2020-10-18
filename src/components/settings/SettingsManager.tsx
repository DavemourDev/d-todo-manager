import React, { useContext } from 'react';
import { TodoContext } from '../../context/TodoContext';
import { DICTIONARY_MAPPING } from '../../helpers/dictionary';

export const SettingsManager = () => {

  const context = useContext(TodoContext)
  const dictionary = DICTIONARY_MAPPING(context.settings.language);

  return (
    <div className="settings-manager">
      <h2>{ dictionary.settings}</h2>
    </div>
  )


}