import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'user-selection',
    pathMatch: 'full',
  },
  {
    path: 'user-selection',
    loadComponent: () => import('./user-selection/user-selection.page').then(m => m.UserSelectionPage),
  },
  {
    path: 'student-login',
    loadComponent: () => import('./student-login/student-login.page').then(m => m.StudentLoginPage),
  },
  {
    path: 'student-dashboard',
    loadComponent: () => import('./student-dashboard/student-dashboard.page').then(m => m.StudentDashboardPage),
  },
  {
    path: 'teacher-login',
    loadComponent: () => import('./teacher-login/teacher-login.page').then(m => m.TeacherLoginPage),
  },
  {
    path: 'teacher-dashboard',
    loadComponent: () => import('./teacher-dashboard/teacher-dashboard.page').then(m => m.TeacherDashboardPage),
  },
  {
    path: 'password-reset',
    loadComponent: () => import('./password-reset/password-reset.page').then(m => m.PasswordResetPage),
  },
  {
    path: 'not-found',
    loadComponent: () => import('./not-found/not-found.page').then(m => m.NotFoundPage)
  },
  {
    path: '**',
    redirectTo: 'not-found',
  },
];