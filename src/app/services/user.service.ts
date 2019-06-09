import { Injectable } from '@angular/core';
import { User } from '../models';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})

export class UserService {

  public user: User;

  constructor(
    private httpClient: HttpClient
  ) {}

  // login() {
  //   this.httpClient
  //     .post("http://localhost:5000/api/users/authentication", this.user)
  //     .subscribe(
  //       (response: any) => {},
  //       err => {}
  //     );
  // }
}