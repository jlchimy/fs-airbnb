import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public user: any = {
    email: "",
    password: ""
  };

  constructor(
    private navCtrl: NavController,
    private httpClient: HttpClient,
    private alertCtrl: AlertController
  ) {}

  navToExplore() {
    this.httpClient
      .post("http://localhost:5000/api/users/authentication", this.user)
      .subscribe(
        (response: any) => {

          localStorage.setItem("userId", response.id);

          this.navCtrl
            .navigateForward('tabs', {
              queryParams: {
                userId: response.id
              }
            });
        },
        (err) => {
          // console.log(err);
          this.presentAlert(err.status);
        }
      );
  }

  navToRegister() {
    this.navCtrl.navigateForward('register');
  }

  async presentAlert(errorNumber) {
    console.log(errorNumber);
    var message = "";
    switch (errorNumber) {
      case 400: message = "Please enter an email.";
        break;
      case 401: message = "Please enter a password.";
        break;
      case 404: message = "User not found.";
        break;
      case 403: message = "Incorrect password.";
    }
    const alert = await this.alertCtrl.create({
      header: 'Error!',
      subHeader: message,
      // message: 'Maybe you\'ve been here before.',
      buttons: ['Try again']
    });

    await alert.present();
  }

  ngOnInit() {
  }
}
