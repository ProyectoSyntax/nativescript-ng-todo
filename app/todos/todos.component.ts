import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { LocalStorage } from "../local-storage";
import { Todo } from "../todo";
import * as dialogs from "ui/dialogs";

@Component({
    selector: 'todos',
    templateUrl: './todos/todos.component.html'
})
export class TodosComponent implements OnInit {

    public todoList: Array<Todo>;
    public isEditing: boolean;

    constructor(private router: RouterExtensions) {
        this.todoList = new Array<Todo>();
        this.isEditing = false;
    }

    ngOnInit() {
        LocalStorage.todos.forEach(e => {
            this.todoList.push(new Todo(e.todoName, e.isDone, e.isEditing));
        });
    }

    public newTodo() {
        dialogs.prompt({
            title: "Nuevo Todo",
            message: "Ingrese el titulo del nuevo todo",
            okButtonText: "Aceptar",
            cancelButtonText: "Cancelar",
            inputType: dialogs.inputType.text
        }).then(r => {
            if (r.result && r.text != "") {
                this.todoList.push(new Todo(r.text));
                LocalStorage.todos = this.todoList;
            }
        });
    }

    public deleteTodo(todo: Todo) {
        var index = this.todoList.indexOf(todo);
        this.todoList.splice(index, 1);
        LocalStorage.todos = this.todoList;
    }

    public editTodo(todo: Todo) {
        if (this.isEditing)
            this.todoList.forEach(t => { t.editing = false; });
        this.isEditing = true;
        todo.editing = true;
        LocalStorage.todos = this.todoList;
    }

    public doneEditing(todo: Todo) {
        todo.editing = false;
        this.isEditing = false;
        LocalStorage.todos = this.todoList;
    }

    public toggleDone(todo: Todo) {
        todo.done = !todo.done;
        LocalStorage.todos = this.todoList;
    }

    public logout() {
        LocalStorage.logout();
        this.router.navigate(['/login'], { clearHistory: true });
    }
}