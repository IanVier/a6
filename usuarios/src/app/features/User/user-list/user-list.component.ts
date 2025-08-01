import { Component, inject } from '@angular/core';
import { UsersService } from '../../../model/service/users.service';
import { IUserData } from '../../../model/interfaces/iuser.interface';
import { RouterLink } from '@angular/router';
import { UserCardComponent } from './user-card/user-card.component';

@Component({
  selector: 'app-user-list',
  imports: [RouterLink, UserCardComponent],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {

  userService = inject(UsersService)
  usersData: IUserData[] = []

  ngOnInit() {
    this.userService.getAllUsers().subscribe( (data) => {
      this.usersData = data
    })
  }

}
