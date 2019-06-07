import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { User, Property, Payment } from '../models/index';
import { PropertyService } from '../services/property.service';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  public properties: Array<Property>;
  public payments: string[];
  public users: Array<User>;


  constructor(
    private navCtrl: NavController,
    private propertyService: PropertyService
  ) 
  {
    this.properties = this.propertyService.getAllProperties();    

    this.users = this.propertyService.getAllUsers();
  }

  navToExplore() {
    this.navCtrl.navigateForward('tabs');
  }

  navToDetails(property: Property) {
    this.navCtrl
      .navigateBack('details', {
        queryParams: {
          propertyName: property.place,
          price: property.price,
          img: property.imgName, 
          id: property.id,
          stars: property.stars
        }
      });
  }

  ngOnInit() {
  }

}
