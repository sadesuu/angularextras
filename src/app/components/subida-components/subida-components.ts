import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ServiceSubida } from '../../services/serviceSubida';

@Component({
  imports: [FormsModule],
  selector: 'app-subida-components',
  styleUrl: './subida-components.css',
  templateUrl: './subida-components.html',
})
export class SubidaComponents {
  @ViewChild('cajaimage') cajaimage!: ElementRef;
  constructor(private _service: ServiceSubida) {}

  async uploadImageAsync(): Promise<void> {
    let input = this.cajaimage.nativeElement as HTMLInputElement;
    let file = input.files?.[0];

    if (!file) {
      return;
    }
    await this._service.uploadFile(file);
  }

  private convertToBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = () => {
        const result = reader.result as string;
        resolve(result.split(',')[1] ?? result);
      };

      reader.onerror = () => reject(new Error('No se pudo leer el archivo'));
      reader.readAsDataURL(file);
    });
  }
}
