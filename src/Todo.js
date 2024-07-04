class Todo{
    constructor(title, description, dueDate) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.checked = false;
    };

    complete() {
        this.checked = true;
    }
}

export default Todo;