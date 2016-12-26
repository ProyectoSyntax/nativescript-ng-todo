export class Todo {
    private todoName: string;
    private isDone: boolean;
    private isEditing: boolean;


    constructor(name: string, done?: boolean, isEditing?: boolean) {
        this.todoName = name;
        this.done = (done == null ? false : done);
        this.isEditing = (isEditing == null ? false : isEditing);
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