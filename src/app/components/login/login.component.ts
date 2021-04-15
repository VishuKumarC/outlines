import { Component, OnInit } from '@angular/core';
import { UserAuthService } from 'src/app/_services/user/user-auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    constructor(private userAuthService: UserAuthService) { }

    ngOnInit(): void {
    }

    onSignIn() {
        this.userAuthService.signInWithGoogle().then((result) => {
            console.log(result);
        });
    }

}
