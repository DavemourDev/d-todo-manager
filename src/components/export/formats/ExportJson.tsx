import React, { useContext } from 'react';
import { TodoContext } from '../../../context/TodoContext';
import { DICTIONARY_MAPPING } from '../../../helpers/dictionary';
import { TodoFileExportInterfaceProps } from '../TodoFileExport';

const generateDownloadLink = (title: string, data: any[]) => {
  return `data:text/json;charset=utf-8,${encodeURIComponent(
    JSON.stringify({ title, data }, null, 2))}
  `;
};

export const TodoFileExportJson = ({ data, title }: TodoFileExportInterfaceProps) => {
  
  const context = useContext(TodoContext);
  const settings = context.settings;
  const dictionary = DICTIONARY_MAPPING(settings.language);
  
  return (
    <button
      className="toolbar-element"
      title={`${dictionary.downloadTodosAs} JSON`}>
      <a
        href={ generateDownloadLink(title, data)}
        download={`${title}.json`}
      >.json</a>
    </button>
  );
};
