import { Injectable } from "@nestjs/common";
import *  as firebase from 'firebase-admin';

@Injectable()
export class AuthService {
    private firebaseApp: firebase.app.App;
    private auth: firebase.auth.Auth;

    constructor() {
        this.firebaseApp = firebase.initializeApp({
            credential: firebase.credential.cert(JSON.parse(process.env.FIREBASE_AUTH_CREDENTIALS)),
        });

        this.auth = this.firebaseApp.auth()
    }

}