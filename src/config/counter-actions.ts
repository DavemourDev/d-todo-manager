import { Action } from "../interfaces/Action";

const ACTIONS = {
    INCREMENT: 'increment',
    DECREMENT: 'decrement'
}

const reducer = (count: number, action: Action): number => {
    switch (action.type) {
      case ACTIONS.INCREMENT:
        const increment = (action.payload.maxValue == null || action.payload.maxValue > count) ? 1 : 0;
        return count + increment;
      case ACTIONS.DECREMENT:
        const decrement = (action.payload.minValue == null || action.payload.minValue < count) ? 1 : 0;
        return count - decrement ;
      default:
        return count;
    }
};
  
export { ACTIONS, reducer }