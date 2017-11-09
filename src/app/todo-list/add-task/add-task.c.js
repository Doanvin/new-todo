export class AddTaskComponent {
    constructor(id) {
        this.element = document.getElementById(id);

        this.element.addEventListener('click', this.addTask());
    }

    addTask(task) {
        if (task && task !== '' && typeof task === String)
            this.list.tasks.unshift(task);
        JSON.stringify(localStorage.setItem(this.list.key.tasks, this.tasks));
    }
}
