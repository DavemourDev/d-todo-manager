import React, { useContext } from 'react';
import { TodoContext } from '../../../context/TodoContext';
import { DICTIONARY_MAPPING } from '../../../helpers/dictionary';
import { Todo } from '../../../interfaces/Todo';
import { TodoFileExportInterfaceProps } from '../TodoFileExport';


export const TodoFileExportTxt = ({ data, title }: TodoFileExportInterfaceProps) => {
  
  const context = useContext(TodoContext);
  const settings = context.settings;
  const dictionary = DICTIONARY_MAPPING(settings.language);

  const TODO_FILE_HEADERS = [
    {
      label: dictionary.id,
      key: 'id'
    },
    {
      label: dictionary.todo,
      key: "name"
    },
    {
      label: dictionary.completed,
      key: "completed",
    },
    {
      label: dictionary.priority,
      key: "priority"
    }
  ];
  
  const dataToTxt = (data: Todo[]) => {

    let fileContent = TODO_FILE_HEADERS.map(header => header.label).join('\t');

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
      title={`${dictionary.downloadTodosAs} TXT`}>
      <a
        href={ generateDownloadLink(title, data)}
        download={`${title}.txt`}
      >.txt</a>
    </button>
  );
};
