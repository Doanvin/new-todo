import {storage} from 'app';

export class AllListsComponent {
    constructor(id) {
        this.element = document.getElementById(id);

        storage.subscribe(this.render());

        // Listen for updates to notes from other windows.
        window.addEventListener('storage', ev => {
            storage.publish();
            console.log(`Updated list: ${ev.key} from ${ev.oldValue} to ${ev.newValue}`); // eslint-disable-line no-console
        });

        this.render();
    }

    render() {
        let lists = [],
            list;

        if (localStorage.length === 0) return this.element.innerHTML = '<li data-list-key="${list.key}" class="lists__item">No Lists Availble</li>';

        for (let i = 0; i < localStorage.length; i++) {
            list = JSON.parse(localStorage.getItem(localStorage.key(i)));
            list.template =
            `<li data-list-key="${list.key}" class="lists__item">
               ${list.title}
            </li>`;
            lists.unshift(list.template);
        }

        this.element.innerHTML = ''.concat(...lists);
    }
}
