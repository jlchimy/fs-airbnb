import { Component, OnInit } from '@angular/core';
// import { NavController } from '@ionic/angular';
// import { ActivatedRoute, ParamMap } from '@angular/router';
// import { User } from '../models';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage { // implements OnInit {

  // public id: number;
  // public user: User;

  constructor(
    // private navCtrl: NavController,
    // private activatedRoute: ActivatedRoute
  ) {}

  // sendProfile() {
  //   this.navCtrl.navigateForward('profile', {
  //     queryParams: {
  //       userId: this.id
  //     }
  //   });
  // }

  // ngOnInit() {
  //   this.activatedRoute.queryParamMap.subscribe(
  //     (parameters: ParamMap) => {
  //       this.id = parseInt(parameters.get("userId"));
  //       console.log(this.id);
  //     }
  //   );
  // }
  
}
