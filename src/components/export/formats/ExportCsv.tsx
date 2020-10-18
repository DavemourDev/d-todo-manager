import React, { useContext } from 'react';
import { CSVLink } from 'react-csv';
import { TodoContext } from '../../../context/TodoContext';
import { DICTIONARY_MAPPING } from '../../../helpers/dictionary';
import { TodoFileExportInterfaceProps } from '../TodoFileExport';

const CSV_HEADERS = [
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

export const TodoFileExportCsv = ({ data, title }: TodoFileExportInterfaceProps) => {

  const context = useContext(TodoContext)
  const settings = context.settings;
  const dictionary = DICTIONARY_MAPPING(settings.language);

  const CSV_HEADERS = [
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

  return (
    <button className="toolbar-element" title={`${dictionary.downloadTodosAs} CSV`}>
      <CSVLink data={data} headers={CSV_HEADERS} filename={`${title}.csv`}>
        .csv
      </CSVLink>
    </button>
  );
};
