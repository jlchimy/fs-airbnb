import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { User } from '../models';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  public firstname: string;
  public lastname: string;
  public email: string;
  public password: string;
  private id: number;
  // public imgURL: string;

  public curr: User;

  constructor(
    private navCtrl: NavController,
    private httpClient: HttpClient,
    private activatedRoute: ActivatedRoute,
    private userService: UserService
  ) { }

  logOut() {
    this.navCtrl.navigateBack('');
  }

  ngOnInit() {
    let arrow = (data: any) => {
      this.firstname = data.params.propertyName;
      this.lastname = data.params.price;
      this.email = data.params.img;
      this.password = data.params.id;

      this.curr = 
        this.userService.findUserById(this.id);

      if (!this.curr) {
        alert("User Not Found");
      }

    }

    this.activatedRoute.queryParamMap.subscribe(
      arrow
    );
      
  }

}
