import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string ="";
  password: string="";

  constructor(private afAuth: AngularFireAuth,
     private router: Router ,
     private authService: AuthService,
     private toastr:ToastrService
     ) {}

  async login() {
    try {
      await this.afAuth.signInWithEmailAndPassword(this.email, this.password);
        // Save the currently logged-in user
        localStorage.setItem("token",this.email);
     this.authService.saveCuurentUser();
     this.toastr.success('success', 'Sucess Login');
      this.router.navigate(['/panel/posts/all']);

    } catch (error) {
      this.toastr.error('error', 'invalid email or password');
      this.email="";
      this.password=""
      console.log('Error logging in:', error);
    }
  }
}

