import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserAuthService } from 'src/app/_services/user/user-auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    loginFormGroup: FormGroup = new FormGroup({
        userName: new FormControl(),
        password: new FormControl()
    });

    constructor(private userAuthService: UserAuthService) {

    }

    ngOnInit(): void {
    }

    onSignIn() {
        this.userAuthService.signInWithGoogle().then((result) => {
            console.log(result);
        });
    }

}
