import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';
import { Storage } from '@ionic/storage-angular';

export interface PartidaHistorial {
  fecha: string;
  attempts: number;
  win: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class StorageService {

  private ionicStorage: Storage | null = null;

  async init(): Promise<void> {
    const storage = new Storage();
    this.ionicStorage = await storage.create();
  }

  // Nivel 1 Preferences
  async getBetsAttempts(): Promise<number> {
    const { value } = await Preferences.get({ key: 'bestAttempts' });
    return value ? Number(value) : 0;
  }

  async saveBestAttemptsIfRecord(attempts: number): Promise<any> {
    const current = await this.getBetsAttempts();
    const isRecord = current === 0 || attempts < current;

    if (isRecord) {
      await Preferences.set({ key: 'bestAttempts', value: String(attempts) });
    }
    return isRecord;
  }

  // Nivel 2: Storage
  async saveHistory(entry: PartidaHistorial): Promise<void> {
    const history = (await this.ionicStorage?.get('history')) ?? [];
    history.push(entry);
    console.log(history);
    await this.ionicStorage?.set('history', history);
  }
}
