import React, { useContext } from 'react';
import { ACTIONS } from '../../config/settings-actions';
import { TodoContext } from '../../context/TodoContext';
import { Language } from '../../helpers/dictionary';
import { IDictionary } from '../../helpers/dictionary/IDictionary';
import { capitalize } from '../../helpers/string-helpers';
import { Settings } from '../../interfaces/Settings';

export const SettingsManager = () => {

  const context = useContext(TodoContext)
  const settings: Settings = context.settings
  const settingsDispatcher = context.settingsDispatcher;
  const dictionary: IDictionary = context.dictionary;

  const changeLanguageHandler = (language: Language) => {
    const payload = { language };
    settingsDispatcher({ type: ACTIONS.SET_LANGUAGE, payload});
  }

  return (
    <div className="settings-manager">
      
      <div className="form-group">
        <label className="label" title={ dictionary.descriptions.languageSettings}>
          { capitalize(dictionary.labels.interfaceLanguage) }
        </label>
        <select onChange={(ev) => changeLanguageHandler(ev.target.value as Language) }>
          <option value="es" selected={ settings.language === 'es' }>{dictionary.languages.es }</option>
          <option value="ca" selected={ settings.language === 'ca' }>{dictionary.languages.ca }</option>
          <option value="en" selected={ settings.language === 'en' }>{dictionary.languages.en }</option>
        </select>
      </div>

    </div>
  )


}