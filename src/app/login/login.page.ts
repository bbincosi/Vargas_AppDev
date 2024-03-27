import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { AuthorizationService } from 'src/authorization.service';
import { DataService } from 'src/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user: string = '';
  pass: string = '';

  userNameCreds = ['bbin', 'admin', 'user'];
  passwordCreds = ['4641', '978', '5432'];

  constructor(
    private router: Router,
    private alertController: AlertController,
    private authenticate: AuthorizationService,
    private toast: ToastController,
    private data: DataService
  ) {}

  ngOnInit() {
    console.log();
  }

  async login() {
    for (let start = 0; start < this.userNameCreds.length; start++) {
      if (
        this.user == this.userNameCreds[start] &&
        this.pass == this.passwordCreds[start]
      ) {
        this.authenticate.authenticated = true;
        localStorage.setItem('username', this.user);
      }
    }
    this.authenticate
      .validateLoad()
      .then(() => {
        this.loginSuccess();
        this.router.navigate(['dashboard/home']);
      })
      .catch(() => {
        this.loginFailed();
      });
  }

  async loginSuccess() {
    const alert = await this.alertController.create({
      header: 'Success',
      subHeader: 'Welcome!',
      message: 'Welcome, ' + this.user,
      buttons: ['OK'],
    });
    await alert.present();
  }

  async loginFailed() {
    const toast = await this.toast.create({
      message: 'Logging in Failed',
      duration: 1000,
    });
    toast.present();
  }
}