import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IUser, IUserData } from '../interfaces/iuser.interface';


@Injectable({
  providedIn: 'root'
 })

export class UsersService {
  // https://peticiones.online/users
  private baseUrl = "https://peticiones.online/api/users"

  httpClient = inject(HttpClient)

  // getAllUsers(): Observable<IUser[]> {
  //   return this.httpClient.get<IUser[]>(this.baseUrl)
  // }
  
    getAllUsers(): Observable<IUserData[]> { // <--- ¡Cambia el tipo de retorno aquí!
    return this.httpClient.get<IUser>(this.baseUrl).pipe( // <--- Espera la interfaz IUser (la respuesta completa)
      map(response => response.results) 
    );
  }

}
