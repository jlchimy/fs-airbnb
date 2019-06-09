import { Injectable } from '@angular/core';
import { Property, User } from '../models';
@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  public properties: Array<Property>;
  public users: Array<User>;

  constructor() {}

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