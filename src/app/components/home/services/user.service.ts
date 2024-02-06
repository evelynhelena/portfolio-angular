import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserProps } from '../types';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUser(userName: string) {
    return this.http.get<UserProps>(`https://api.github.com/users/${userName}`);
  }

}
