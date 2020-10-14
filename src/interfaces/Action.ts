export interface Action { 
  type: string;
  payload: {
    [key: string]: any
  }
};

