import React from 'react';
import { CSVLink } from 'react-csv';
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
  return (
    <button className="toolbar-element" title="Descargar tareas como CSV">
      <CSVLink data={data} headers={CSV_HEADERS} filename={`${title}.csv`}>
        .csv
      </CSVLink>
    </button>
  );
};
