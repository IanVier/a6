import { Component, Input } from '@angular/core';
import { IUserData } from '../../../../model/interfaces/iuser.interface';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-user-card',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css'
})
export class UserCardComponent {
  //IUserData es un objeto, no un array. El valor inicial debe ser un objeto vacío o undefined, no [].
  @Input() userDetail?: IUserData
}
