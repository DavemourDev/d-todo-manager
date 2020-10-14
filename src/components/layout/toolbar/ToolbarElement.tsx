import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';


type ToolbarElementProps = {
  handler: () => void,
  title: string,
  icon?: IconProp
  disabled?: boolean
};


export const ToolbarElement = ({ handler, icon, title, disabled }: ToolbarElementProps) => (
  <button
    className={`toolbar-element ${icon && "icon"}`}
    onClick={() => handler()}
    title={title}
    disabled={disabled}
  >
    {icon ? <FontAwesomeIcon icon={icon} /> : <>{title}</>}
  </button>
);
