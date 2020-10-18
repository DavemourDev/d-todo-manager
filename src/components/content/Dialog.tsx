import React, { ReactNode, useContext } from 'react';
import { TodoContext } from '../../context/TodoContext';
import { DICTIONARY_MAPPING } from '../../helpers/dictionary';
import { Settings } from '../../interfaces/Settings';

type DialogProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode | Array<ReactNode>;
};
export const Dialog = ({ isOpen, onClose, children }: DialogProps) => {

  const context = useContext(TodoContext);
  const settings: Settings = context.settings;
  const dictionary = DICTIONARY_MAPPING(settings.language);

  return (
  <>
    {isOpen && (
      <div className="dialog--overlay">
        <div className="dialog">
          <div className="panel">
            {children}
            <hr/>
            <button onClick={onClose}>{ dictionary.exit }</button>
          </div>
        </div>
      </div>
    )}
  </>
  );
};
