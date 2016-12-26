import * as ApplicationSettings from "application-settings";

export class LocalStorage {
    public static set todos(todo: Array<any>) {
        ApplicationSettings.setString("todos", JSON.stringify(todo));
    }

    public static get todos(): Array<any> {
        var todos = ApplicationSettings.getString("todos");
        return !todos ? new Array<any>() : JSON.parse(todos);
    }
}