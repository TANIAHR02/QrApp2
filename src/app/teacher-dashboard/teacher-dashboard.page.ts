import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { QRCodeModule } from 'angularx-qrcode';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-teacher-dashboard',
  templateUrl: './teacher-dashboard.page.html',
  styleUrls: ['./teacher-dashboard.page.scss'],
  standalone: true,
  imports: [IonicModule, QRCodeModule, CommonModule],
})
export class TeacherDashboardPage {
  teacherName: string = '';
  qrData: string = '';

  constructor() {}

  generateQRCode() {
    this.qrData = 'attendance-' + new Date().toISOString();
    console.log('QR Data:' , this.qrData);
  }
}