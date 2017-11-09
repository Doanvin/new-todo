export class NavListComponent {
    constructor(id) {
        this.element = document.getElementById(id);

        const alc = new AllListsComponent('all-lists-component');
    }
}
