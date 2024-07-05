class Todo{
    constructor(title, description, dueDate) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.checked = false;
    };

    changeMarked() {
        this.checked = !this.checked;
    }
}

export default Todo;