import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SubidaComponents } from './components/subida-components/subida-components';

@Component({
  imports: [SubidaComponents],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('angularextras');
}
