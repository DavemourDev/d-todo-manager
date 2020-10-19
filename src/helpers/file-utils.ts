import { IDictionary } from "./dictionary/IDictionary";

export type FileReadyHandler = (this: FileReader, ev: ProgressEvent<FileReader>) => any;

export const readTextFile = (file: File, readyHandler: FileReadyHandler) => {
  let fr = new FileReader();
  fr.addEventListener('loadend', readyHandler);
  fr.readAsText(file)
}

export const getTodoFileHeaders = (dictionary: IDictionary) => {
  return [
    {
      label: dictionary.terms.id,
      key: 'id'
    },
    {
      label: dictionary.terms.todo,
      key: "name"
    },
    {
      label: dictionary.terms.completed,
      key: "completed",
    },
    {
      label: dictionary.terms.priority,
      key: "priority"
    }
  ];
}
