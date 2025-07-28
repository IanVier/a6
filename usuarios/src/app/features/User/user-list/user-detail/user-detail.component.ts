import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { UsersService } from '../../../../model/service/users.service';
import { IUserData } from '../../../../model/interfaces/iuser.interface';

@Component({
  selector: 'app-user-detail',
  imports: [RouterOutlet,RouterLink],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.css'
})
export class UserDetailComponent {
  activedRouted = inject(ActivatedRoute)
  userService = inject(UsersService)
  userDetail?: IUserData

  ngOnInit() {
    this.activedRouted.params.subscribe( (params: any) => {
      const userId = params['id']
        console.log('userId:', userId); // <-- agrega esto
      if (userId) {
        this.userService.getById(userId).subscribe(user => {
          this.userDetail = user
          console.log(user)
        })
      }
    })
  }
  
}
