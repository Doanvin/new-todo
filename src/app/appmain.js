export class List {
    constructor(title, tags) {
        this.key = new Date.now().toString();
        this.title = title;
        this.tags = tags.replace(/\s*,\s*/, ',').split(',');
        this.tasks = [];
    }
}

export class ListController {
    constructor(list) {
        this.key = list.key;
        this.title = list.title;
        this.tags = list.tags;
        this.tasks = list.tasks;
        this.list = {
            [this.key]: {
                'title': this.title,
                'tags': this.tags,
                'tasks': this.tasks
            }
        };

        console.log(typeof(this.tasks));

        // Listen for updates to notes from other windows.
        window.addEventListener('storage', ev => {
            console.log(`Updated list: ${ev.key} from ${ev.oldValue} to ${ev.newValue}`);
        });
    }

    addList() {
        console.log(`List: ${this.list}`);
        JSON.stringify(localStorage.setItem(this.key, this.list));
    }

    addTask(task) {
        this.list.tasks.unshift(task);
        JSON.stringify(localStorage.setItem(this.list.key.tasks, this.tasks));
    }

    removeList() {

    }

}




export class HeaderComponent {
    constructor(selector) {
        this.element = document.getElementByClassName(selector)[0];
    //     this.template =
    // ``;
    }

}

export class SidebarComponent {
    constructor() {

    }
}

export class TodoListComponent {
    constructor() {

    }
}

export class AddTaskComponent {
    constructor() {

    }
}

export class Tasks {
    constructor(task) {
        this.task = task;
        this.completed = false;
    }
}

export class TasksComponent {
    constructor() {

    }

    divToInput() {

    }
}

class App {
    constructor(selector) {
        this.element = document.getElementById(selector);
    }
}
