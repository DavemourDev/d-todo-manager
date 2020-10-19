import { Descriptions, Greetings, IDictionary, Issues, Labels, Languages, Menu, Terms, Tooltips } from "../IDictionary";

const greetings: Greetings = {
  goodMorning: "Good morning!",
  goodAfternoon: "Good afternoon!",
  goodEvening: "Good evening!",
  goodNight: "Good night!"
};

const labels: Labels = {
  addTodo: "Add TODO",
  loadTodoList: "Load TODO list",
  createNewTodoList: "Create TODO list",
  interfaceLanguage: "GUI language"
};

const issues: Issues = {
  invalidFormat: "Invalid format",
  cannotReadFileContents: "Cannot read file contents",
  noRecognisedFile: "Non recognised file",
  noTodosOnList: "TODO list is empty"
}; 

const terms: Terms = {
  actions: "actions",
  all: "all",
  ascendent: 'ascendent',
  averagePriority: 'average priority',
  completed: 'completed',
  completionState: 'completed?',
  create: 'create',
  date: 'date',
  delete: 'delete',
  deletion: 'Deletion',
  descendent: 'descendent',
  download: 'download',
  exit: 'exit',
  export: 'export',
  file: 'file',
  id: 'ID',
  import: 'import',
  pending: 'pending',
  priority: 'priority',
  settings: 'settings',
  sort: 'order',
  show: 'show',
  toSort: 'order',
  todo: 'TODO',
  todoList: 'TODO list',
  todos: 'TODOs',
  toMark: 'mark',
  toggle: 'toggle',
  language: 'language'
};

const menu: Menu = {
  customTodoLists: "Custom TODO lists",
  dailyTodoLists: "Daily TODO lists",
  configureSettings: "Application settings"
}

const tooltips: Tooltips = {
  alphaSort: `${terms.toSort} alphabetically`,
  prioritySort: `${terms.toSort} by priority`,
  showCompletedFirst: `${terms.show} ${terms.completed} first`,
  showPendingFirst: `${terms.show} ${terms.pending} first`,
  markAllAs: `${terms.toMark} ${terms.all} as`,

  downloadTodosAs: `${terms.download} ${terms.todos} as`,
  selectTodoList: `select a ${terms.todoList}`,
  importTodosFrom: `${terms.import} ${terms.todos} from`,
  importTodosFromFile: `${terms.import} ${terms.todos} from ${terms.file}`,
  importDailyTodos: `${terms.import} daily ${terms.todos}`,
  toggleCompletionState: `${terms.toggle} completion state`,
  markAllAsCompleted: `${terms.toMark} ${terms.all} as ${ terms.completed }`,
  markAllAsPending: `${terms.toMark} ${terms.all} as ${terms.pending}`,
  deleteCompletedTodos: `${terms.delete} ${terms.completed}`,
  deletePendingTodos: `${terms.delete} ${terms.pending}`,
  increasePriority: `Increase ${terms.priority}`,
  decreasePriority: `Decrease ${terms.priority}`,
  deleteTodo: `${terms.delete} ${terms.todo}`

}

const descriptions: Descriptions = {
  importTodosFromFile: "Select file from where to load TODOs. Current TODO list will be replaced by TODO list in file.",
  languageSettings: "NOTE: Language settings applies mainly to application GUI, and it doesn't modify nor translate in any form TODOs data",
  dailyTodoLists: "Choose a date for accessing its TODOs.",
};


const languages: Languages = {
  es: 'Spanish',
  ca: 'Catalan',
  en: 'English',
} 

export class EnglishDictionary implements IDictionary {
  greetings: Greetings = greetings;
  labels: Labels = labels;
  issues: Issues = issues;
  terms: Terms = terms;
  menu: Menu = menu;
  tooltips: Tooltips = tooltips;
  descriptions: Descriptions = descriptions;
  languages: Languages = languages;
}

export const ENGLISH = new EnglishDictionary();