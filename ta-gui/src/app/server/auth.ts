import { dbApiCalls } from './firestore.js';
import { Injectable } from '@angular/core';
import { Pessoa } from '../../../../common/pessoa.js';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "@angular/fire/auth";

@Injectable()
export class fbAuth {
 constructor(private auth: Auth) { } 

    // SIGN UP USER
    createUser (email: string, password: string, pessoa: Pessoa) {

        createUserWithEmailAndPassword(this.auth, email, password).then(res => {
        var uid = this.auth.currentUser.uid;
        dbApiCalls.post(pessoa);
        return 'success'
        })
        .catch(err => {
            return err.message
        });
    }
    

    // LOG OUT METHOD
    logout() {
        signOut(this.auth);
    };
    
    // LOGIN
    login(email: string, password: string) {
        signInWithEmailAndPassword(this.auth, email, password).then(res => {
            return 'success'
        })
        .catch(err => {
            return err.message
        });
    }
}