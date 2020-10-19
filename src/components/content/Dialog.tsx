import React, { ReactNode, useContext } from 'react';
import { TodoContext } from '../../context/TodoContext';
import { IDictionary } from '../../helpers/dictionary/IDictionary';
import { capitalize } from '../../helpers/string-helpers';

type DialogProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode | Array<ReactNode>;
};
export const Dialog = ({ isOpen, onClose, children }: DialogProps) => {

  const context = useContext(TodoContext);
  const dictionary: IDictionary = context.dictionary;

  return (
  <>
    {isOpen && (
      <div className="dialog--overlay">
        <div className="dialog">
          <div className="panel">
            {children}
            <hr/>
            <button onClick={onClose}>{ capitalize(dictionary.terms.exit) }</button>
          </div>
        </div>
      </div>
    )}
  </>
  );
};
