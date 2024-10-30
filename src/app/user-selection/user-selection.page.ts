import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-user-selection',
  templateUrl: './user-selection.page.html',
  styleUrls: ['./user-selection.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class UserSelectionPage {
  constructor(private router: Router) {}

  navigateToStudentLogin() {
    this.router.navigate(['/student-login']);
  }

  navigateToTeacherLogin() {
    this.router.navigate(['/teacher-login']);
  }

  navigateToPasswordReset() {
    this.router.navigate(['/password-reset']);
  }
}