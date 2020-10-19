
export type Greetings = {
  goodMorning: string;
  goodAfternoon: string;
  goodEvening: string;
  goodNight: string;
}

export type Terms = {
  actions: string;
  all: string;
  ascendent: string;
  averagePriority: string;
  completed: string;
  completionState: string;
  create: string;
  date: string;
  delete: string;
  deletion: string;
  descendent: string;
  download: string;
  exit: string;
  export: string;
  file: string;
  id: string;
  import: string;
  pending: string;
  priority: string;
  settings: string;
  sort: string;
  todo: string;
  todoList: string;
  todos: string;
  toggle: string;
  toMark: string;
  toSort: string;
  show: string;
  language: string;
}

export type Menu = {
  customTodoLists: string;
  dailyTodoLists: string;
  configureSettings: string;
};

export type Tooltips = {
  alphaSort: string;
  prioritySort: string;
  showCompletedFirst: string;
  showPendingFirst: string;
  markAllAs: string;
  selectTodoList: string;
  downloadTodosAs: string;
  importTodosFrom: string;
  importTodosFromFile: string;
  importDailyTodos: string;
  toggleCompletionState: string;
  markAllAsCompleted: string;
  markAllAsPending: string;
  deleteCompletedTodos: string;
  deletePendingTodos: string;
  increasePriority: string;
  decreasePriority: string;
  deleteTodo: string;
}

export type Descriptions = {
  importTodosFromFile: string,
  languageSettings: string,
  dailyTodoLists: string
};

export type Labels = {
  addTodo: string;
  loadTodoList: string;
  createNewTodoList: string;
  interfaceLanguage: string;
}

export type Issues = {
  invalidFormat: string;
  noRecognisedFile: string;
  cannotReadFileContents: string;
  noTodosOnList: string;
};

export type Languages = {
  es: string;
  ca: string;
  en: string;
}

export interface IDictionary {
  greetings: Greetings;
  labels: Labels;
  issues: Issues;
  terms: Terms;
  menu: Menu;
  tooltips: Tooltips;
  descriptions: Descriptions,
  languages: Languages
}
