import { Descriptions, Greetings, IDictionary, Issues, Labels, Languages, Menu, Terms, Tooltips } from "../IDictionary";

const greetings: Greetings = {
  goodMorning: "¡Buenos días!",
  goodAfternoon: "¡Buenas tardes!",
  goodEvening: "¡Buenas noches!",
  goodNight: "¡Buenas noches!"
};

const labels: Labels = {
  addTodo: "Añadir tarea",
  loadTodoList: "Cargar lista de tareas",
  createNewTodoList: "Crear lista de tareas",
  interfaceLanguage: "Idioma de la interfaz"
};

const issues: Issues = {
  invalidFormat: "Formato no válido",
  cannotReadFileContents: "No se han podido leer los contenidos del fichero",
  noRecognisedFile: "Fichero no reconocido",
  noTodosOnList: "No hay tareas en la lista"
}; 

const terms: Terms = {
  actions: "Acciones",
  all: "Todo",
  ascendent: 'ascendente',
  averagePriority: 'prioridad media',
  completed: 'completadas',
  completionState: 'completada?',
  create: 'crear',
  date: 'fecha',
  delete: 'borrar',
  deletion: 'borrado',
  descendent: 'descendente',
  download: 'descargar',
  exit: 'salir',
  export: 'exportar',
  file: 'fichero',
  id: 'ID',
  import: 'importar',
  pending: 'pendientes',
  priority: 'prioridad',
  settings: 'configuración',
  sort: 'orden',
  show: 'mostrar',
  toSort: 'ordenar',
  todo: 'tarea',
  todoList: 'lista de tareas',
  todos: 'tareas',
  toMark: 'marcar',
  toggle: 'invertir',
  language: 'idioma'
};


const menu: Menu = {
  customTodoLists: "Listas de tareas personalizadas",
  dailyTodoLists: "Listas de tareas diarias",
  configureSettings: "Configuración de la aplicación"
}

const tooltips: Tooltips = {
  alphaSort: `${terms.toSort} alfabéticamente`,
  prioritySort: `${terms.toSort} por prioridad`,
  showCompletedFirst: `${terms.show} ${terms.completed} primero`,
  showPendingFirst: `${terms.show} ${terms.pending} primero`,
  markAllAs: `${terms.toMark} todas como`,

  downloadTodosAs: `${terms.download} ${terms.todos} como`,
  selectTodoList: `Selecciona una ${terms.todoList}`,
  importTodosFrom: `${terms.import} ${terms.todos} desde `,
  importTodosFromFile: `${terms.import} ${terms.todos} desde ${terms.file}`,
  importDailyTodos: `${terms.import} ${terms.todos} diarias`,
  toggleCompletionState: `${terms.toggle} estado de compleción`,
  markAllAsCompleted: `${terms.toMark} ${terms.all} como ${ terms.completed }`,
  markAllAsPending: `${terms.toMark} ${terms.all} como ${terms.pending}`,
  deleteCompletedTodos: `${terms.delete} ${terms.completed}`,
  deletePendingTodos: `${terms.delete} ${terms.pending}`,
  increasePriority: `Aumentar ${terms.priority}`,
  decreasePriority: `Reducir ${terms.priority}`,
  deleteTodo: `${terms.delete} ${terms.todo}`
}

const descriptions: Descriptions = {
  importTodosFromFile: "Seleccione el fichero del cual desea cargar tareas. Tener en cuenta que las tareas de la lista actual serán reemplazadas por las tareas cargadas del fichero.",
  languageSettings: "NOTA: La configuración de idioma se aplica principalmente a la interfaz gráfica de la aplicación, y no modificará ni traducirá en absoluto la información de tus tareas",
  dailyTodoLists: "Escoge una fecha para acceder a sus tareas.",
};

const languages: Languages = {
  es: 'Castellano',
  ca: 'Catalán',
  en: 'Inglés',
} 

export class SpanishDictionary implements IDictionary {
  greetings: Greetings = greetings;
  labels: Labels = labels;
  issues: Issues = issues;
  terms: Terms = terms;
  menu: Menu = menu;
  tooltips: Tooltips = tooltips;
  descriptions: Descriptions = descriptions;
  languages: Languages = languages;
}

export const SPANISH = new SpanishDictionary();