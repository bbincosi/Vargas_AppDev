import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AuthorizationService } from 'src/authorization.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  username: any;

  constructor(
    private modalController: ModalController, 
    private router: Router, 
    private isLogin: AuthorizationService) { 

  this.username = localStorage.getItem('username');
  }
  ngOnInit() {
  }
  async toggleModal(){
    const modal = await this.modalController.create({
      component:ModalController
    })
    return await modal.present();
  };
  logout(){
    this.isLogin.authenticated = false;
    localStorage.removeItem('username');
    this.router.navigate(['login'])
  }


  async dismissToast(){
    const toast = await this.modalController.getTop();
      if(toast){
      toast.dismiss();
    }
  }

  async NotifOn(){
    const modal = await this.modalController.create({
      component : Notification
    })
    return await modal.present();
    }
}
    

  




