import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { User } from '../models';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  public user: User;

  constructor(
    private navCtrl: NavController,
    private httpClient: HttpClient,
  ) {
    this.user = new User();
  }

  logOut() {
    this.navCtrl.navigateBack('');
  }

  ngOnInit() {
    const id = localStorage.getItem("userId");
    this.httpClient
      .get("http://localhost:5000/api/users/" + id)
      .subscribe(
        (response: User) => {
          console.log(response);
          this.user.firstname = response.firstname;
          this.user.lastname = response.lastname;
          this.user.email = response.email;
        }
      );
  }

}
