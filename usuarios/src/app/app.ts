import { Component } from '@angular/core';
import { HeaderLayoutComponent } from './Layout/header-layout/header-layout.component';
import { RouterOutlet } from '@angular/router';
import { FooterLayoutComponent } from "./Layout/footer-layout/footer-layout.component";


@Component({
  selector: 'app-root',
  imports: [HeaderLayoutComponent, RouterOutlet, FooterLayoutComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'usuarios';
}
