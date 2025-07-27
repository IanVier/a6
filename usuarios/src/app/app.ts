import { Component } from '@angular/core';
import { HeaderLayoutComponent } from './Layout/header-layout/header-layout.component';


@Component({
  selector: 'app-root',
  imports: [HeaderLayoutComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'usuarios';
}
