import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-teacher-login',
  templateUrl: './teacher-login.page.html',
  styleUrls: ['./teacher-login.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule],
})
export class TeacherLoginPage {
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  login() {
    
    console.log('Intento de inicio de sesión con:', this.username, this.password);
    this.router.navigate(['/teacher-dashboard']);
  }
 
  resetPassword() {
    
    console.log('Solicitud de restablecimiento de contraseña para:', this.username);
  }
}