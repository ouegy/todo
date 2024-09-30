function project(title, description, dueDate, priority) {
    const tasks = [];
    function getTasks() {
        return this.tasks;
    }
    return { title, description, dueDate, priority, tasks, getTasks };
}

export { project };
