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
  
  getAllUsers(): Observable<IUserData[]> { 
    return this.httpClient.get<IUser>(this.baseUrl).pipe( 
      map(response => response.results) 
    )
  }

  getById(id: string): Observable<IUserData> {
    return this.httpClient.get<IUserData>(`${this.baseUrl}/${id}`);
  }

  createUser(user: IUserData): Observable<IUserData> {
    return this.httpClient.post<IUserData>(this.baseUrl, user);
  }

  updateUser(id: string, user: IUserData): Observable<IUserData> {
    return this.httpClient.put<IUserData>(`${this.baseUrl}/${id}`, user);
  }

}






  // getAllUsers(): Observable<IUser[]> {
  //   return this.httpClient.get<IUser[]>(this.baseUrl)
  // }