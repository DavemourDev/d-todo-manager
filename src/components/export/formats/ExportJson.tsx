import React from 'react';
import { TodoFileExportInterfaceProps } from '../TodoFileExport';

const generateDownloadLink = (title: string, data: any[]) => {
  return `data:text/json;charset=utf-8,${encodeURIComponent(
    JSON.stringify({ title, data }, null, 2))}
  `;
};

export const TodoFileExportJson = ({ data, title }: TodoFileExportInterfaceProps) => {
  return (
    <button
      className="toolbar-element"
      title="Descargar tareas como JSON">
      <a
        href={ generateDownloadLink(title, data)}
        download={`${title}.json`}
      >.json</a>
    </button>
  );
};
