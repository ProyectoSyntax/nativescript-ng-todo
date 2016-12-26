// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScriptDynamic, NativeScriptModule } from "nativescript-angular/platform";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { TodosComponent } from "./todos/todos.component";
import { LoginComponent } from "./login/login.component";

@NgModule({
    declarations: [AppComponent, LoginComponent, TodosComponent],
    bootstrap: [AppComponent],
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forRoot([
            { path: "", redirectTo: "/login", pathMatch: "full" },
            { path: "login", component: LoginComponent },
            { path: "todos", component: TodosComponent },
        ])
    ],
})
class AppComponentModule { }

platformNativeScriptDynamic().bootstrapModule(AppComponentModule);