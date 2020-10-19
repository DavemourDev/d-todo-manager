import { IDictionary, Greetings, Issues, Labels, Menu, Terms, Tooltips, Descriptions, Languages } from "../IDictionary";

const greetings: Greetings = {
  goodMorning: "Bon dia!",
  goodAfternoon: "Bona tarda!",
  goodEvening: "Bon vespre!",
  goodNight: "Bona nit!"
};

const labels: Labels = {
  addTodo: "Afegir tasca",
  loadTodoList: "Carregar llista de tasques",
  createNewTodoList: "Crear llista de tasques",
  interfaceLanguage: "Idioma de la interfície"
};

const issues: Issues = {
  invalidFormat: "Format no vàlid",
  cannotReadFileContents: "No s'han pogut llegir els continguts del fitxer",
  noRecognisedFile: "Fitxer no reconegut",
  noTodosOnList: "No hi ha tasques a la llista"
}; 

const terms: Terms = {
  actions: "accions",
  all: "tot",
  ascendent: 'ascendent',
  averagePriority: 'prioritat mitjana',
  completed: 'completades',
  completionState: 'completada?',
  create: 'crear',
  date: 'data',
  delete: 'esborrar',
  deletion: 'Del·leció',
  descendent: 'descendent',
  download: 'descarregar',
  exit: 'sortir',
  export: 'exportar',
  file: 'fitxer',
  id: 'ID',
  import: 'importar',
  pending: 'pendents',
  priority: 'prioritat',
  settings: 'configuració',
  sort: 'ordre',
  show: 'mostrar',
  toSort: 'ordenar',
  todo: 'tasca',
  todoList: 'llista de tasques',
  todos: 'tasques',
  toMark: 'marcar',
  toggle: 'invertir',
  language: 'idioma'
};

const menu: Menu = {
  customTodoLists: "Llista de tasques personalitzades",
  dailyTodoLists: "Llista de tasques diàries",
  configureSettings: "Configuració de l'aplicació"
}

const tooltips: Tooltips = {
  alphaSort: `${terms.toSort} alfabèticament`,
  prioritySort: `${terms.toSort} per prioritat`,
  showCompletedFirst: `${terms.show} ${terms.completed} primer`,
  showPendingFirst: `${terms.show} ${terms.pending} primer`,
  markAllAs: `${terms.toMark} ${terms.all} com a`,

  downloadTodosAs: `${terms.download} ${terms.todos} com a`,
  selectTodoList: `Sel·lecciona una ${terms.todoList}`,
  importTodosFrom: `Importar ${terms.todos} des de `,
  importTodosFromFile: `Importar ${terms.todos} des d'un ${terms.file}`,
  importDailyTodos: `Importar ${terms.todos} diàries`,
  toggleCompletionState: `${terms.toggle} estat de compleció`,
  markAllAsCompleted: `${terms.toMark} ${terms.all} com a ${ terms.completed }`,
  markAllAsPending: `${terms.toMark} ${terms.all} com a ${terms.pending}`,
  deleteCompletedTodos: `${terms.delete} ${terms.completed}`,
  deletePendingTodos: `${terms.delete} ${terms.pending}`,
  increasePriority: `Augmentar ${terms.priority}`,
  decreasePriority: `Reduïr ${terms.priority}`,
  deleteTodo: `${terms.delete} ${terms.todo}`,
}

const descriptions: Descriptions = {
  importTodosFromFile: "Selecciona el fitxer del qual vols carregar les tasques. Tingues en compte que les tasques actuals a la llista seran substituïdes per les tasques carregades.",
  languageSettings: "NOTA: La configuració d'idioma s'aplica principalment a la interfície gràfica de l'aplicació, i no modificará ni traduirà de cap manera la informació de les teves tasques",
  dailyTodoLists: "Escull una data per a accedir a les seves tasques.",
};

const languages: Languages = {
  es: 'Castellà',
  ca: 'Català',
  en: 'Anglés',
} 

export class CatalanDictionary implements IDictionary {
  greetings: Greetings = greetings;
  labels: Labels = labels;
  issues: Issues = issues;
  terms: Terms = terms;
  menu: Menu = menu;
  tooltips: Tooltips = tooltips;
  descriptions: Descriptions = descriptions;
  languages: Languages = languages;
}

export const CATALAN = new CatalanDictionary();