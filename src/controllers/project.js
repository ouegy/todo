function Project(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.tasks = [];
    this.info = function () {
        return {
            title: title,
            description: description,
            dueDate: dueDate,
            priority: priority,
            tasks: this.tasks,
        };
    };
}
