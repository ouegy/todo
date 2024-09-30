export default function project(title, description, dueDate) {
    const tasks = [];
    function getTasks() {
        return this.tasks;
    }
    return { title, description, dueDate, tasks, getTasks };
}
