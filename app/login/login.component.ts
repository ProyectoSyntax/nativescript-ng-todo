import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from "nativescript-angular/router";
import { LocalStorage } from "../local-storage";

@Component({
    selector: 'login',
    templateUrl: './login/login.component.html',
    styleUrls: ['./login/login.component.css']
})
export class LoginComponent implements OnInit {

    private logginIn: boolean = false;
    private uname: string = "";
    private password: string = "";
    private message: string;

    constructor(private router: RouterExtensions) { }

    ngOnInit() {
        if (LocalStorage.user != null) {
            this.router.navigate(["/todos"], { clearHistory: true });
        }
    }


    onLoginSubmit() {
        if (this.uname == "" || this.password == "") return;
        this.message = null;
        this.logginIn = true;
        setTimeout(() => {
            this.logginIn = false;
            if (this.uname == "syntax" && this.password == "syntax") {
                LocalStorage.user = this.uname;
                this.router.navigate(["/todos"], { clearHistory: true });
            } else {
                this.message = "Usuario o contraseña invalida";
            }
        }, 3000);
    }
}