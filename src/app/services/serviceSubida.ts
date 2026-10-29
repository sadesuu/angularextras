import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { File as FileModel } from '../models/file';

@Injectable({ providedIn: 'root' })
export class ServiceSubida {
  private url = environment.urlApi;

  constructor(private http: HttpClient) {}

  async uploadFile(file: globalThis.File): Promise<any> {
    let req = "api/TestingFiles"
    const fileName = file.name;
    const fileContent = await this.fileToBase64(file);
    const body = new FileModel(fileName, fileContent);

    return firstValueFrom(this.http.post<any>(this.url + req, body));
  }

  private fileToBase64(file: globalThis.File): Promise<string> {
    
  }
}