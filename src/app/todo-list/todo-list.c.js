export class TodoListComponent {
    constructor(id) {
        this.element = document.getElementById(id);
        this.button = document.getElementById('add-task');
        this.template =
        '';
    }
}
