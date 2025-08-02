import { Component, inject } from '@angular/core';
import { DialogRef, DIALOG_DATA } from '@angular/cdk/dialog';
import { UsersService } from '../../../../model/service/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-delete',
  imports: [],
  templateUrl: './user-delete.component.html',
  styleUrl: './user-delete.component.css'
})
export class UserDeleteComponent {
  private dialogRef = inject(DialogRef)
  public userData: { firstName: string, userId: string, lastName: string} = inject(DIALOG_DATA)
  userService = inject(UsersService)
  private router = inject(Router)
closeModal(): void {
  this.dialogRef.close()
}

deleteUser() {
  const userId = this.userData.userId
  this.userService.deleteUser(userId).subscribe( {
          next: () => {
      console.log(`Usuario con ID ${userId} eliminado.`);
      this.closeModal()
      this.router.navigate(['/home']);
      },
      error: (err) => {
        console.error('Error al eliminar el usuario:', err);
      }
  })
}

}
