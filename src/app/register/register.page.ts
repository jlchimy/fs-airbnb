import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { PropertyService } from '../services/property.service';
import { User } from '../models';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  public users: Array<User>;

  public user: any = {
    firstname: "",
    lastname: "",
    email: "",
    password: ""
  };

  constructor(
    private navCtrl: NavController,
    private propertyService: PropertyService,
    private httpClient: HttpClient,
    private alertCtrl: AlertController
  ) {
    // this.users = this.propertyService.getAllUsers();
  }

  navToExplore() {
    console.log(this.user.firstname);
    console.log(this.user.lastname);
    this.httpClient
      .post("http://localhost:5000/api/users", this.user)
      .subscribe(
        (response: any) => {
          localStorage.setItem("userId", response.id);
          this.navCtrl
            .navigateForward('tabs', {
              queryParams: {
                userId: response.id
                // password: user.password,
                // first: user.firstname,
                // last: user.lastname,
                // email: user.email
              }
            });
        },
        (err) => {
          this.presentAlert();
        }
      );
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Error!',
      subHeader: 'Email already in use.',
      message: 'Maybe you\'ve been here before.',
      buttons: ['Try again']
    });

    await alert.present();
  }

  ngOnInit() {
  }
}
