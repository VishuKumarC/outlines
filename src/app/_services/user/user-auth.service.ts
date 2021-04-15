import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';

@Injectable({
    providedIn: 'root'
})
export class UserAuthService {

    constructor(private firebaseAuth: AngularFireAuth) { }

    signInWithGoogle() {
        return this.firebaseAuth.signInWithPopup(new firebase.default.auth.GoogleAuthProvider());
    }
}
