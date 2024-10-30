import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule, AlertController } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { DbService } from '../services/db.service'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-student-login',
  templateUrl: './student-login.page.html',
  styleUrls: ['./student-login.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule, CommonModule],
  providers: [DbService]
})
export class StudentLoginPage {
  username: string = '';
  password: string = '';

  constructor(
    private router: Router,
    private dbService: DbService,
    private alertController: AlertController
  ) {}

  async login() {
    // Validación básica
    if (!this.username || !this.password) {
      await this.showAlert('Error', 'Por favor, ingrese usuario y contraseña', true);
      return;
    }

    try {
      const result = await this.dbService.loginOrRegister(this.username, this.password);
      
      if (result.success) {
        if (result.isNewUser) {
          await this.showAlert('Registro Exitoso', 'Usuario registrado correctamente');
          this.router.navigate(['/student-dashboard']);
        } else {
          // Usuario existente con credenciales correctas
          this.router.navigate(['/student-dashboard']);
        }
      } else {
        // Error en las credenciales
        await this.showAlert('Error de Acceso', result.message, true);
      }
    } catch (error) {
      console.error('Error durante el login:', error);
      await this.showAlert('Error', 'Ocurrió un error durante el proceso de acceso', true);
    }
  }

  async showAlert(header: string, message: string, showReturnButton: boolean = false) {
    const buttons = showReturnButton ? 
      [
        {
          text: 'Volver al inicio',
          handler: () => {
            this.clearFields();
            this.router.navigate(['/user-selection']);
          }
        }
      ] : ['OK'];

    const alert = await this.alertController.create({
      header,
      message,
      buttons,
      cssClass: 'custom-alert'
    });

    await alert.present();
  }

  private clearFields() {
    this.username = '';
    this.password = '';
  }

  resetPassword() {
    this.router.navigate(['/password-reset']);
  }
}