import { Injectable } from '@angular/core';
import { Property } from '../models';
@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  public properties: Array<Property>;

  constructor() {}

  getAllProperties(): Array<Property> {
    this.properties = new Array();
    let capetown = new Property(300, "Cape Town", "assets/icon/capetown.jpg", 1, 4);
    let rome = new Property(350, "Rome", "assets/icon/rome.jpg", 2, 3.5);
    let odessa = new Property(350, "Odessa", "assets/icon/odessa.jpg", 3, 5);
    this.properties.push(capetown);
    this.properties.push(rome);
    this.properties.push(odessa);

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


}