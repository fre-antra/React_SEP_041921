export class Todo {
  userId: number;
  title: string;
  completed: boolean;
  id: number;
  constructor(userId: number, title: string, completed: boolean, id: number) {
    this.userId = userId;
    this.id = id;
    this.title = title;
    this.completed = completed;
  }
}
