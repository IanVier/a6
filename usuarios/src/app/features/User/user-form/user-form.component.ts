import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../../../model/service/users.service';
import { IUserData } from '../../../model/interfaces/iuser.interface';
import { passwordValidator } from './passwordValidator';

@Component({
  selector: 'app-user-form',
  imports: [ReactiveFormsModule],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css'
})
export class UserFormComponent {

  userForm: FormGroup;
  userId: string | null = null
  private activateRoute = inject(ActivatedRoute)
  private userService = inject(UsersService)
  public formTitle: string = ''

  constructor() {

    this.userForm = new FormGroup({
      first_name: new FormControl("",[
        Validators.required,
        Validators.minLength(3)
      ]),
      last_name: new FormControl("",[
        Validators.required
      ]),
      email: new FormControl("",[
        Validators.required
      ]),
      image: new FormControl("",[
        Validators.required
      ]),
      username: new FormControl("",[
        Validators.required
      ]),
      password: new FormControl("",[
        Validators.required,
        passwordValidator
      ]),
      _id: new FormControl('')
      }, [])

  }

  onSubmit() {
    if (this.userForm.valid) {
      const userData: IUserData = this.userForm.value;

      if (this.userId) {
          this.userService.updateUser(this.userId, userData).subscribe({
            next: (response) => {
              console.log('Usuario actualizado:', response);
            },
            error: (error) => {
              console.error('Error al actualizar el usuario:', error);
            }
          })

      } else {
        this.userService.createUser(userData).subscribe( {
          next: (response) => {
            console.log('Usuario creado:', response);
          },
          error: (error) => {
            console.error('Error al crear el usuario:', error);
          }
        }
        );
      }
    }
  }

ngOnInit() : void {
  this.activateRoute.params.subscribe(params => {
    this.userId = params['id'] || null
    if (this.userId) {
      this.formTitle = 'Editar usuario'
      this.userService.getById(this.userId).subscribe(user => {
        this.userForm.patchValue(user)
      })
    } else if (!this.userId) {
      this.formTitle = 'Crear nuevo usuario'
    }
  })
}
  checkControl(controlName: string, errorName: string): boolean | undefined {
    return this.userForm.get(controlName)?.hasError(errorName) && this.userForm.get(controlName)?.touched
  }

}


