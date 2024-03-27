import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {

  constructor(private modalController: ModalController, private alertController: AlertController) { }

  ngOnInit() { }

  async closeModal() {
    await this.modalController.dismiss();
  }

  sendMessage() {
    this.showAlert();
    this.closeModal();
  }

  async showAlert() {
    const alert = await this.alertController.create(
      {
        header: ' ',
        subHeader: 'Status',
        message: 'Save Successfully!',
        buttons: ['Continue']
      }
    );
    alert.present();
  }

}
