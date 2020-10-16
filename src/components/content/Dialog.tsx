import React, { ReactNode } from 'react';

type DialogProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode | Array<ReactNode>;
};
export const Dialog = ({ isOpen, onClose, children }: DialogProps) => {

  return (
  <>
    {isOpen && (
      <div className="dialog--overlay">
        <div className="dialog">
          <div className="panel">
            {children}
            <hr/>
            <button onClick={onClose}>Salir</button>
          </div>
        </div>
      </div>
    )}
  </>
  );
};
