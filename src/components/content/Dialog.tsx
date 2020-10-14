import React, { ReactNode } from 'react';
import { TransitionGroup, CSSTransition } from "react-transition-group";

type DialogProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode | Array<ReactNode>;
};
export const Dialog = ({ isOpen, onClose, children }: DialogProps) => {

  return (
    <TransitionGroup component={null}>
      {isOpen && (
        <CSSTransition classNames="dialog" timeout={300}>
          <div className="dialog--overlay">
            <div className="dialog">
              <div className="panel">
                <div className="container">
                  {children}
                </div>
                <button onClick={onClose}>OK</button>
              </div>
            </div>
          </div>
        </CSSTransition>
      )}
    </TransitionGroup>
  );
};
