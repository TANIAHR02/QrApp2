import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';
import { Platform } from '@ionic/angular';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonicModule, RouterOutlet],
  providers: [SQLite]
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private sqlite: SQLite
  ) {
    this.platform.ready().then(() => {
      this.initializeApp();
    });
  }

  private initializeApp() {
    if (this.platform.is('cordova') || this.platform.is('capacitor')) {
      this.sqlite.create({
        name: 'data.db',
        location: 'default'
      })
      .then((db) => {
        console.log('Base de datos creada');
      })
      .catch(e => console.error('Error al crear BD:', e));
    }
  }
}