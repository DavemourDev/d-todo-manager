import React, { ReactNode, ReactNodeArray, useState } from 'react';
import { CSSTransition } from 'react-transition-group';

type ItemProps = { children: ReactNode | ReactNodeArray }

// Esta clase es para probar cosas.

const Item = ({ children }: ItemProps) => {

  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="panel">
      <CSSTransition in={isVisible} timeout={300} classNames={"sample"}>
        <span>{children}</span>
      </CSSTransition>
      <button onClick={() => setIsVisible(!isVisible)}>
        { isVisible ? "Hide" : "Show"}
      </button>
    </div>
  )
};

export const Sandbox = () => {

  return (
       false ? (
      <>
        <h3>Items</h3>
        <div>
          <Item>Item 1</Item>
          <Item>Item 2</Item>
          <Item>Item 3</Item>
        </div>
      </>
    ) : <></>
  )
};