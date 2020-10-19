import { Todo } from "../interfaces/Todo";

/**
 * Given a todo list, gets the number of completed todos.
 * 
 * @param data 
 */
export const getNumberOfCompletedTodos = (data: Todo[]): number => {
  return data.reduce((nCompleted, t) => (
    nCompleted + (t.completed ? 1 : 0)
  ), 0);
}

/**
 * Gets the average value of priority for a given todo list.
 * 
 * If list is empty, it returns 0.
 * 
 * @param data The todo list. 
 */
export const getAveragePriority = (data: Todo[]): number => {
  const prioritySum = getPrioritySum(data);
  return data.length > 0 ? prioritySum / data.length : 0; 
}

/**
 * Gets the priority sum value for a given todo list.
 * 
 * If list is empty, it returns 0.
 * @param data The todo list. 
 */
export const getPrioritySum = (data: Todo[]): number => {
  return data.reduce((sum, { priority }) => sum + priority, 0);
}

