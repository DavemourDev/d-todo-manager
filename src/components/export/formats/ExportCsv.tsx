import React, { useContext } from 'react';
import { CSVLink } from 'react-csv';
import { TodoContext } from '../../../context/TodoContext';
import { getTodoFileHeaders } from '../../../helpers/file-utils';
import { capitalize } from '../../../helpers/string-helpers';
import { TodoFileExportInterfaceProps } from '../TodoFileExport';

export const TodoFileExportCsv = ({ data, title }: TodoFileExportInterfaceProps) => {

  const context = useContext(TodoContext)
  const dictionary = context.dictionary;

  return (
    <button className="toolbar-element" title={`${ capitalize(dictionary.tooltips.downloadTodosAs)} CSV`}>
      <CSVLink data={data} headers={getTodoFileHeaders(dictionary)} filename={`${title}.csv`}>
        .csv
      </CSVLink>
    </button>
  );
};
