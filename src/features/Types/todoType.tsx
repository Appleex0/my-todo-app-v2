export interface TodoType {
  id: string;
  name: string;
  description: string;
}

export interface TodoState {
  list: TodoType[];
}