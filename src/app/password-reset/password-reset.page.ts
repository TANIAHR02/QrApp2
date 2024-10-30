import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.page.html',
  styleUrls: ['./password-reset.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule],
})
export class PasswordResetPage {
  username: string = '';

  constructor(private router: Router) {}

  resetPassword() {
    
    console.log('Solicitud de restablecimiento de contraseña para:', this.username);
    
    alert('Si el usuario existe, se enviará un correo electrónico con instrucciones para restablecer la contraseña.');
    this.router.navigate(['/user-selection']);
    
  }
}