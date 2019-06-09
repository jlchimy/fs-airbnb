import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { User, Property } from '../models/index';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  public properties: Array<Property>;

  constructor(
    private navCtrl: NavController,
    private httpClient: HttpClient
  ) {}

  navToDetails(property: Property) {
    this.navCtrl
      .navigateBack('details', {
        queryParams: {
          id: property.id //,
          // name: property.name,
          // location: property.location,
          // price: property.price,
          // img: property.imgURL, 
          // stars: property.stars
        }
      });
  }

  ngOnInit() {
    this.httpClient
      .get("http://localhost:5000/api/properties")
      .subscribe(
        (response: Array<Property>) => {
          this.properties = response;
        }
      );
  }

}
