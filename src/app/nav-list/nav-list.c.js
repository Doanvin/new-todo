export class NavListComponent {
    constructor(id) {
        this.element = document.getElementById(id);
        this.template =
        '';

        // Listen for updates to notes from other windows.
        window.addEventListener('storage', ev => {
            this.list = JSON.parse(localStorage.getItem(ev.key));
            console.log(`Updated list: ${ev.key} from ${ev.oldValue} to ${ev.newValue}`); // eslint-disable-line no-console
        });
    }
}
