import { Component, inject, Input } from '@angular/core';
import { IUserData } from '../../../../model/interfaces/iuser.interface';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Dialog } from '@angular/cdk/dialog';
import { UserDeleteComponent } from '../user-delete/user-delete.component';

@Component({
  selector: 'app-user-card',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css'
})
export class UserCardComponent {
  //IUserData es un objeto, no un array. El valor inicial debe ser un objeto vacío o undefined, no [].
  @Input() userDetail?: IUserData
  private dialog = inject(Dialog) 

    protected openModal() {
      this.dialog.open(UserDeleteComponent, {
        data: {
          firstName: this.userDetail?.first_name,
          lastName: this.userDetail?.last_name,
          userId: this.userDetail?._id
        }
      });
    }

}
