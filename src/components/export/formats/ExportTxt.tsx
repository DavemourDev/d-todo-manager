import React, { useContext } from 'react';
import { TodoContext } from '../../../context/TodoContext';
import { getTodoFileHeaders } from '../../../helpers/file-utils';
import { capitalize } from '../../../helpers/string-helpers';
import { Todo } from '../../../interfaces/Todo';
import { TodoFileExportInterfaceProps } from '../TodoFileExport';


export const TodoFileExportTxt = ({ data, title }: TodoFileExportInterfaceProps) => {
  
  const context = useContext(TodoContext);
  const dictionary = context.dictionary;
  
  const dataToTxt = (data: Todo[]) => {

    let fileContent = getTodoFileHeaders(dictionary).map(header => header.label).join('\t');

    data.forEach((todo: Todo) => {
      fileContent = `${ fileContent }\n${ Object.values(todo).join('\t') }`;
    });

    return fileContent;
  };

  const generateDownloadLink = (title: string, data: any[]) => {
    return `data:text/plain;charset=utf-8,${encodeURIComponent(dataToTxt(data))}`;
  };

  return (
    <button
      className="toolbar-element"
      title={`${capitalize(dictionary.tooltips.downloadTodosAs)} TXT`}>
      <a
        href={ generateDownloadLink(title, data)}
        download={`${title}.txt`}
      >.txt</a>
    </button>
  );
};
