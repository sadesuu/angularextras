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
  @ViewChild('cajaimage') cajaimage!:ElementRef
  constructor(
    private _service: ServiceSubida
  ){}

  async uploadImageAsync():Promise<void>{

    
    let imagen = 
    await this._service.uploadFile()
  }
}
