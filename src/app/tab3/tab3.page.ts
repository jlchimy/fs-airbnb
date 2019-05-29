import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { User, Transaction, Payment } from '../models/index';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  public transactions: Array<Transaction>;
  public payments: string[];

  public users: Array<User>;

  constructor(
    private navCtrl: NavController
  ) {
    this.transactions = new Array();
    let capetown = new Transaction(300, "Cape Town", "assets/icon/capetown.jpg", "navToDetails");
    let rome = new Transaction(350, "Rome", "assets/icon/rome.jpg", "navToDetails");
    let odessa = new Transaction(350, "Odessa", "assets/icon/odessa.jpg", "navToDetails");
    this.transactions.push(capetown);
    this.transactions.push(rome);
    this.transactions.push(odessa);

    this.users = new Array();

    let user1 = new User();
    user1.firstname = "Jacob";
    user1.lastname = "Chimerine";

    let user2 = new User();
    user1.firstname = "John";
    user1.lastname = "Doe";

    this.users.push(user1);
    this.users.push(user2);
  }

  navToExplore() {
    this.navCtrl.navigateForward('tabs');
  }

  navToDetails() {
    this.navCtrl.navigateForward('details');
  }

  ngOnInit() {
  }

}
