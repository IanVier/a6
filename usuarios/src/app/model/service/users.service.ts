import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../interfaces/iuser.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private baseUrl = "https://peticiones.online/users"

  httpClient = inject(HttpClient)

  getAllUsers(): Observable<IUser[]> {
    return this.httpClient.get<IUser[]>(this.baseUrl)
  }
  
}
