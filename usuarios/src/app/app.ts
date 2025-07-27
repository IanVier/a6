import { Component } from '@angular/core';
import { HeaderLayoutComponent } from './Layout/header-layout/header-layout.component';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [HeaderLayoutComponent, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'usuarios';
}
