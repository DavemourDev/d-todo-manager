import React, { useContext } from 'react';
import { TodoContext } from '../../../context/TodoContext';
import { capitalize } from '../../../helpers/string-helpers';
import { TodoFileExportInterfaceProps } from '../TodoFileExport';

const generateDownloadLink = (title: string, data: any[]) => {
  return `data:text/json;charset=utf-8,${encodeURIComponent(
    JSON.stringify({ title, data }, null, 2))}
  `;
};

export const TodoFileExportJson = ({ data, title }: TodoFileExportInterfaceProps) => {
  
  const context = useContext(TodoContext);
  const dictionary = context.dictionary;
  
  return (
    <button
      className="toolbar-element"
      title={`${capitalize(dictionary.tooltips.downloadTodosAs)} JSON`}>
      <a
        href={ generateDownloadLink(title, data)}
        download={`${title}.json`}
      >.json</a>
    </button>
  );
};
