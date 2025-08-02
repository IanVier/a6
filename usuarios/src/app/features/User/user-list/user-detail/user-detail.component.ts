import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { UsersService } from '../../../../model/service/users.service';
import { IUserData } from '../../../../model/interfaces/iuser.interface';
import { Dialog } from '@angular/cdk/dialog';
import { UserDeleteComponent } from '../user-delete/user-delete.component';

@Component({
  selector: 'app-user-detail',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.css'
})
export class UserDetailComponent {
  activedRouted = inject(ActivatedRoute)
  userService = inject(UsersService)
  userDetail?: IUserData

  private dialog = inject(Dialog) 
  protected openModal() {
    this.dialog.open(UserDeleteComponent)
  }

  ngOnInit() {
    this.activedRouted.params.subscribe( (params: any) => {
      const userId = params['id']
        console.log('userId:', userId); 
      if (userId) {
        this.userService.getById(userId).subscribe(user => {
          this.userDetail = user
          console.log(user)
        })
      }
    })
  }
  
}
