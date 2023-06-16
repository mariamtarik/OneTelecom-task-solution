import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor( private _Router:Router) {
    if(localStorage.getItem('token') !=null) {
      this.saveCuurentUser();
    }
    
       }
      currentUser=new BehaviorSubject(null);
      saveCuurentUser(){
        let token:any=localStorage.getItem("token");
        this.currentUser.next(token);
      }
      logOut(){
        this.currentUser.next(null);
        localStorage.removeItem("token");
        this._Router.navigate(['/login']);
      }
  
}
