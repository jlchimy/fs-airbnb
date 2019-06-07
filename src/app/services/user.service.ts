import { Injectable } from '@angular/core';
import { User } from '../models';
@Injectable({
  providedIn: 'root'
})

export class UserService {

  public users: Array<User>;

  constructor() {}

  findUserById(id: number): User {
    let foundUser: User = null;

    this.users.forEach(
      (property: User) => {
        if (property.id == id) {
          foundUser = property;
        }
      } 
    )

    return foundUser;
  }
}