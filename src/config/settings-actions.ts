import { Action } from "../interfaces/Action";
import { Settings } from "../interfaces/Settings";

export const ACTIONS = {
  SET_LANGUAGE: 'set application language'
};

export const reducer = (settings: Settings, action: Action): Settings => { 
  switch (action.type) {
    case ACTIONS.SET_LANGUAGE:
      settings.language = action.payload.language;
      return Object.create(settings);
    default:
      return settings;
  }

}
