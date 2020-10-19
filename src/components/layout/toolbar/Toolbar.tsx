import React, { ReactElement } from 'react';
import { capitalize } from '../../../helpers/string-helpers';
import { TodoFileExport } from '../../export/TodoFileExport';
import { ToolbarElement } from './ToolbarElement';

type ToolbarProps = {
  children: (
    // TODO: Implement inheritance or abstraction: TodoFileExport > ToolbarElement
    ReactElement<typeof TodoFileExport> | Array<ReactElement<typeof TodoFileExport>> |
    ReactElement<typeof ToolbarElement> | Array<ReactElement<typeof ToolbarElement>>
  ),
  label: string,
  collapsed?: boolean,
  clickLabelHandler: () => void
};

const Toolbar = ({ children, label, collapsed, clickLabelHandler }: ToolbarProps) => {

  return (
    <div className="toolbar">
      <div className="label pointer" onClick={ clickLabelHandler }>
        {capitalize(label)}
      </div>
    
      <div className={`toolbar-item-container ${collapsed && 'collapsed'}`}>
        {children}
      </div>
    </div>
  );
}


export { Toolbar, ToolbarElement };