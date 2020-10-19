type Time = {
  h: number;
  m: number;
};

export interface Todo { 
  id: number;
  name: string;
  completed: boolean;
  priority: number;
  time?: Time
}