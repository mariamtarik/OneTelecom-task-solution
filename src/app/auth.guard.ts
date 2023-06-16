
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private afAuth: AngularFireAuth, private router: Router ,private _AuthService:AuthService) {}

  async canActivate() {
    if (this._AuthService.currentUser.getValue()!=null) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}

