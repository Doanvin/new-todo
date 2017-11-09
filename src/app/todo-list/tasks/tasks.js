import {storage} from 'app';

export class TasksComponent {
    constructor(id) {
        this.element = document.getElementById(id);
        this.template =
        '';

        storage.subscribe(this.render());
    }

    getTasks() {

    }

    divToInput() {

    }
}
