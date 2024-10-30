import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';
import { Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class DbService {
  private db!: SQLiteObject; // Usando el operador de aserción definitiva

  constructor(private sqlite: SQLite, private platform: Platform) {
    this.platform.ready().then(() => {
      this.createDatabase();
    });
  }
 
  async loginOrRegister(username: string, password: string): Promise<{success: boolean, message: string, isNewUser: boolean}> {
    if (!this.db) {
      return { success: false, message: 'Base de datos no inicializada', isNewUser: false };
    }

    try {
      const user = await this.validateUser(username);
      
      if (user) {
        if (user.password === password) {
          return { success: true, message: 'Login exitoso', isNewUser: false };
        } else {
          return { success: false, message: 'Contraseña incorrecta', isNewUser: false };
        }
      } else {
        await this.addUser(username, password, 'user');
        return { success: true, message: 'Usuario registrado exitosamente', isNewUser: true };
      }
    } catch (error) {
      console.error('Error en loginOrRegister:', error);
      return { success: false, message: 'Error en el proceso', isNewUser: false };
    }
  }

  private async validateUser(username: string): Promise<any> {
    if (!this.db) return null;
    
    const data = await this.db.executeSql(
      'SELECT * FROM users WHERE username = ?',
      [username]
    );
    return data.rows.length > 0 ? data.rows.item(0) : null;
  }

  private async addUser(username: string, password: string, role: string): Promise<void> {
    if (!this.db) return;
    
    await this.db.executeSql(
      'INSERT INTO users (username, password, role) VALUES (?, ?, ?)',
      [username, password, role]
    );
  }

  private async createDatabase() {
    try {
      this.db = await this.sqlite.create({
        name: 'qrapp.db',
        location: 'default'
      });
      await this.createTables();
    } catch (error) {
      console.error('Error al crear la base de datos:', error);
    }
  }

  private async createTables() {
    if (!this.db) return;
    
    await this.db.executeSql(`
      CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL,
        role TEXT NOT NULL
      )
    `, []);
  }
}