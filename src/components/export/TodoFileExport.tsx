import React, { useContext } from 'react';
import { TodoContext } from '../../context/TodoContext';
import { DICTIONARY_MAPPING } from '../../helpers/dictionary';
import { Todo } from "../../interfaces/Todo";
import { TodoFileExportCsv } from './formats/ExportCsv';
import { TodoFileExportJson } from './formats/ExportJson';
import { TodoFileExportTxt } from './formats/ExportTxt';

export enum Formats {
  JSON, CSV, TEXT
};

type TodoFileExportProps = {
  title: string,
  data: Todo[],
  format: Formats
};

export type TodoFileExportInterfaceProps = {
  title: string,
  data: Todo[]
};

/**
 * Provides a button for downloading data on CSV format
 */
const TodoFileExport = ({ title, data, format }: TodoFileExportProps) => {
  
  const context = useContext(TodoContext);
  const settings = context.settings;
  const dictionary = DICTIONARY_MAPPING(settings.language);


  if (format === Formats.CSV) {
    return <TodoFileExportCsv title={title} data={data} />;
  } else if (format === Formats.JSON) {
    return <TodoFileExportJson title={title} data={data}/>;
  } else if (format === Formats.TEXT) {
    return <TodoFileExportTxt title={title} data={data}/>;
  } else {  
    return <>{ dictionary.invalidFormat}</>;
  }

};


export { TodoFileExport }