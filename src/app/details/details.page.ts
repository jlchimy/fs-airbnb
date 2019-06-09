import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Property } from '../models';
import { PropertyService } from '../services/property.service';
import { HttpClient } from '@angular/common/http';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  public name: string;
  public location: string;
  public price: number;
  public imgURL: string;
  private propertyID: number;
  public numStars: number;
  public curr: Property;

  public properties: Array<Property>;

  public minDate: string;
  public startDate: string;

  public booking: any = {
    dateFrom: "",
    dateTo: ""
  };

  constructor(
    private activatedRoute: ActivatedRoute,
    private propertyService: PropertyService,
    private httpClient: HttpClient,
    private navCtrl: NavController,
    private alertCtrl: AlertController
  ) {
    this.minDate = new Date().toISOString();
    this.startDate = new Date().toISOString();
  }

  navToExplore() {
    this.httpClient
      .post("http://localhost:5000/api/bookings", this.booking)
      .subscribe((response: any) => {
        this.navCtrl
          .navigateForward('tabs', {
            queryParams: {
              userId: response.id
            }
          });
      },
        (err) => {
          // console.log(err);
          this.presentAlert();
        }
      );
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Error!',
      subHeader: 'Cannot make booking request.',
      message: 'Check your input and try again.',
      buttons: ['Try again']
    });
  }

  ngOnInit() {
    let arrow = (data: any) => {
      this.name = data.params.name;
      this.location = data.params.location;
      this.price = data.params.price;
      this.imgURL = data.params.img;
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