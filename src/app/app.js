import {enterListeners, getInputs} from 'utils';
import {Observable} from 'observable';
import {AddListComponent} from '/add-list/add-list.c';
import {NavListComponent} from '/nav-list/nav-list.c';
import {TodoListComponent} from '/todo-list/todo-list.c';

const winLoad = new Observable();
winLoad.subscribe(enterListeners());

export const storage = new Observable();

const [AL,NL,TL] = [
    new AddListComponent('add-list-component'),
    new NavListComponent('nav-list-component'),
    new TodoListComponent('todo-list-component')
];




// class AppComponent {
//     constructor(id) {
//         this.element = document.getElementById(id);
//         this.declarations = [
//             AddListComponent('add-list-component'),
//             NavListComponent('nav-list-component'),
//             TodoListComponent('todo-list-component')
//         ];
//         this.init = () => {
//             for (let i = 0; i < this.declarations.length; i++) {
//                 new this.declarations[i];
//             }
//         };
//
//         enterListeners('input-text');
//     }
// }
