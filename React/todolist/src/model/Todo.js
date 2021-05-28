export class Todo {
    constructor(title, id, userId = 1, completed = false) {
        this.userId = userId;
        this.id = id;
        this.title = title;
        this.completed = completed;
    }
}
