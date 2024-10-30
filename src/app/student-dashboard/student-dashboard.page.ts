import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.page.html',
  styleUrls: ['./student-dashboard.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class StudentDashboardPage implements OnInit {
  studentName: string = ''; 

  constructor() {}

  ngOnInit() {
    
  }
}