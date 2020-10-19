import { Todo } from "../../interfaces/Todo";

export interface Storage {

  getCustomTodoListsNames(): string[];

  setTodosOnDate(date: string | Date, todos: Todo[]): void;

  getDateTodos(date: string): Todo[];

  saveTodoOnDate(date: string, todo: Todo): void;
    

}