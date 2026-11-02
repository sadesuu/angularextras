import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { File as FileModel } from '../models/file';

@Injectable({ providedIn: 'root' })
export class ServiceSubida {
  private readonly url = `${environment.urlApi}api/TestingFiles`;

  constructor(private readonly http: HttpClient) {}

  async uploadFile(file: globalThis.File): Promise<unknown> {
    const fileName = file.name;
    const fileContent = await this.fileToBase64(file);
    const body = new FileModel(fileName, fileContent);

    return firstValueFrom(this.http.post<unknown>(this.url, body));
  }

  private fileToBase64(file: globalThis.File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = () => {
        if (typeof reader.result !== 'string') {
          reject(new Error('La imagen no se pudo convertir a Base64.'));
          return;
        }

        resolve(reader.result.split(',')[1] ?? reader.result);
      };

      reader.onerror = () => {
        reject(new Error('No se pudo leer la imagen seleccionada.'));
      };

      reader.readAsDataURL(file);
    });
  }
}