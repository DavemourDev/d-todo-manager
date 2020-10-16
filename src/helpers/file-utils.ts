export type FileReadyHandler = (this: FileReader, ev: ProgressEvent<FileReader>) => any;

export const readTextFile = (file: File, readyHandler: FileReadyHandler) => {
  let fr = new FileReader();
  fr.addEventListener('loadend', readyHandler);
  fr.readAsText(file)
}

