import { Component } from "@angular/core";
import dialogs = require("ui/dialogs");


@Component({
    selector: "my-app",
    templateUrl: "app.component.html",
    styleUrls: ["app.css"]
})
export class AppComponent {
    public todoList: Array<Todo>;
    public isEditing: boolean;

    constructor() {
        this.todoList = new Array<Todo>();
        this.isEditing = false;
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
            }
        });
    }

    public deleteTodo(todo: Todo) {
        var index = this.todoList.indexOf(todo);
        this.todoList.splice(index, 1);
    }

    public editTodo(todo: Todo) {
        if (this.isEditing)
            this.todoList.forEach(t => { t.editing = false; });
        this.isEditing = true;
        todo.editing = true;
    }

    public doneEditing(todo: Todo) {
        todo.editing = false;
        this.isEditing = false;
    }

    public toggleDone(todo: Todo) {
        todo.done = !todo.done;
    }

}

class Todo {
    private isDone: boolean;
    private todoName: string;
    private isEditing: boolean;

    constructor(name: string) {
        this.todoName = name;
        this.done = false;
        this.isEditing = false;
    }

    public set done(done: boolean) {
        this.isDone = done;
    }

    public get done(): boolean {
        return this.isDone;
    }

    public get name(): string {
        return this.todoName;
    }

    public set name(newName: string) {
        this.todoName = newName;
    }

    public get editing(): boolean {
        return this.isEditing;
    }

    public set editing(newEditing: boolean) {
        this.isEditing = newEditing;
    }
}