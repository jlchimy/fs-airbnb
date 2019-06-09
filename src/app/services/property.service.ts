import { Injectable } from '@angular/core';
import { Property, User } from '../models';
@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  public properties: Array<Property>;
  public users: Array<User>;

  constructor() {}

  getAllProperties(): Array<Property> {
    this.properties = new Array();

    return this.properties;
  }

  findPropertyById(id: number): Property {
    let foundProperty: Property = null;

    this.properties.forEach(
      (property: Property) => {
        if (property.id == id) {
          foundProperty = property;
        }
      } 
    )

    return foundProperty;
  }

  getAllUsers(): Array<User> {
    this.users = new Array();
    let user1 = new User('jlchimy', 'myPassword', 'Jacob', 'Chimerine');
    this.users.push(user1);

    let user2 = new User('jd24', 'different_password');
    this.users.push(user2);

    return this.users;
  }

  findPasswordForUser(email: string): string {
    let password: string = null;

    this.users.forEach(
      (user: User) => {
        if (user.email == email) {
          password = user.password;
        }
      }
    )

    return password;
  }


}