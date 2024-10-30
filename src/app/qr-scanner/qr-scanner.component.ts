import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-qr-scanner',
  templateUrl: './qr-scanner.component.html',
  styleUrls: ['./qr-scanner.component.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class QrScannerComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    
  }

  scanQRCode() {
    
    console.log('QR code scanned');
  }
}