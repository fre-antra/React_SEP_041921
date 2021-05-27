export class Todo {
  constructor(userId, title, completed, id) {
    this.userId = userId;
    this.id = id;
    this.title = title;
    this.completed = completed;
  }
}
