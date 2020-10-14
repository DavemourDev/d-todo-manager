import React from 'react';
import { Todo } from '../../../interfaces/Todo';
import { TodoFileExportInterfaceProps } from '../TodoFileExport';


const TODO_FILE_HEADERS = [
  {
    label: "ID",
    key: 'id'
  },
  {
    label: "Tarea",
    key: "name"
  },
  {
    label: "Completada",
    key: "completed",
  },
  {
    label: "Prioridad",
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

export const TodoFileExportTxt = ({ data, title }: TodoFileExportInterfaceProps) => {
  return (
    <button
      className="toolbar-element"
      title="Descargar tareas como TXT">
      <a
        href={ generateDownloadLink(title, data)}
        download={`${title}.txt`}
      >.txt</a>
    </button>
  );
};
