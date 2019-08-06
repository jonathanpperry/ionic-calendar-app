import { Component } from '@angular/core';
import { NavController, ModalController, AlertController } from '@ionic/angular';
import * as moment from 'moment';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  eventSource = [];
  viewTitle: string;
  selectedDay = new Date();

  calendar = {
    mode: 'month',
    currentDate: this.selectedDay
  }

  constructor(
    public navCtrl: NavController,
    private modalCtrl: ModalController,
    private alertController: AlertController,
  ) {
    this.viewTitle = "Calendar App"
  }

  addEvent() {

  }

  onViewTitleChanged(title) {
    this.viewTitle = title;
  }

  onTimeSelected(ev) {
    this.selectedDay = ev.selectedTime;
  }

  async onEventSelected(event) {
    let start = moment(event.startTime).format('LLLL');
    let end = moment(event.endTime).format('LLLL');

    this.presentAlert(event.title, start, end);
  }

  async presentAlert(title, start, end) {
    const alert = await this.alertController.create({
      header: '' + title,
      subHeader: 'From: ' + start + '<br>To: ' + end,
      buttons: ['OK']    });
    await alert.present();
  }

}