import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { Property } from '../models';
import { PropertyService } from '../services/property.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  public propertyName: string;
  public price: number;
  public imgName: string;
  private propertyID: number;
  public numStars: number;
  public curr: Property;

  public properties: Array<Property>;

  constructor(
    private navCtrl: NavController,
    private activatedRoute: ActivatedRoute,
    private propertyService: PropertyService
  ) { 
  }

  navToEdit() {
    this.navCtrl
      .navigateForward('edit', {
        queryParams: {
          propertyName: this.curr.place,
          price: this.curr.price,
          img: this.curr.imgName
        }
      });
  }

  ngOnInit() {
    let arrow = (data: any) => {
      this.propertyName = data.params.propertyName;
      this.price = data.params.price;
      this.imgName = data.params.img;
      this.propertyID = data.params.id;
      this.numStars = data.params.stars;

      this.curr = 
        this.propertyService.findPropertyById(this.propertyID);

      if (!this.curr) {
        alert("Property Not Found");
      }

    }

    this.activatedRoute.queryParamMap.subscribe(
      arrow
    );
  }

}