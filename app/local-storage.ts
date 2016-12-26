import * as ApplicationSettings from "application-settings";

export class LocalStorage {
    public static set todos(todo: Array<any>) {
        ApplicationSettings.setString("todos", JSON.stringify(todo));
    }

    public static get todos(): Array<any> {
        var todos = ApplicationSettings.getString("todos");
        return todos == null ? new Array<any>() : JSON.parse(todos);
    }

    public static set user(uname: string) {
        ApplicationSettings.setString("user", uname);
    }

    public static get user() {
        return ApplicationSettings.getString("user");
    }

    public static logout() {
        ApplicationSettings.clear();
    }
}