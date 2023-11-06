import { UserCredential, createUserWithEmailAndPassword, getAuth } from "@firebase/auth";
import { Injectable } from "@nestjs/common";

@Injectable()
export class AuthService {
    constructor() {
    }

    async createFirebaseUser(email: string, password: string): Promise<UserCredential> {
        return await createUserWithEmailAndPassword(getAuth(), email, password)
    }
}