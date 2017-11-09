import {List} from '/shared/list.m';
import {getInputs} from 'utils';
import {Observable} from 'observable';

export class AddListComponent {
    constructor(id) {
        this.element = document.getElementById(id);
        this.button = document.getElementById('create-list');

        const btnClick = new Observable();
        btnClick.subscribe(this.addList());
    }

    addList() {
        const inputs = getInputs(this.btn.id);
        this.list = new List(inputs[0].value, inputs[1].value);
        console.log(`List: ${this.list}`); // eslint-disable-line no-console
        localStorage.setItem(this.key, JSON.stringify(this.list));
    }

}
