import React, { ChangeEvent } from 'react';
import { readTextFile } from '../../helpers/file-utils';
import { Todo } from '../../interfaces/Todo';

// De momento la importación de tareas soporta solamente formato JSON pero se platea
// dar soporte a otros formatos de ficheros.

type TodoFileImportProps = {
  onSelectFile: (data: Todo[]) => void,
  onLoadDataError: (errorMessage: string) => void
}

export const TodoFileImport = ({ onSelectFile, onLoadDataError }: TodoFileImportProps) => {

  const changeHandler = (ev: ChangeEvent<HTMLInputElement>) => {
    const files = ev.target.files;
    if (!files) {
      onLoadDataError("Fichero no reconocido.");
      return;
    }
    const file = files[0];

    readTextFile(file, function(this: FileReader, ev: ProgressEvent<FileReader>): void {
      if (!this.result) {
        onLoadDataError("No se han podido leer los contenidos del fichero")
        return;
      }
      try {
        const content = JSON.parse(this.result.toString());
        const data: Todo[] = content.data;
        onSelectFile(data);
      } catch (error) {
        onLoadDataError(error);
      } 
    });
  };

  return (
    <div className="form-group">
      <label className="button" htmlFor="import-file" style={{ cursor: "pointer" }}>
        Importar tareas desde fichero JSON
      </label>
      <input
        id="import-file"
        className="input-file"
        type="file"
        accept=".json"
        onChange={changeHandler} />
    </div>
  )

};