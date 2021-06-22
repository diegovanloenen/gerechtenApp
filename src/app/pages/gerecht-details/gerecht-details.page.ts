import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GerechtService, Gerecht } from 'src/app/services/gerecht.service';
import { ToastController } from '@ionic/angular';
 
@Component({
  selector: 'app-gerecht-details',
  templateUrl: './gerecht-details.page.html',
  styleUrls: ['./gerecht-details.page.scss'],
})
export class GerechtDetailsPage implements OnInit {
 
  gerecht: Gerecht = {
    name: '',
    notes: '',
    photo: ''
  };
 
  constructor(private activatedRoute: ActivatedRoute, private gerechtService: GerechtService,
    private toastCtrl: ToastController, private router: Router) { }
 
  ngOnInit() { }
 
  ionViewWillEnter() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.gerechtService.getGerecht(id).subscribe(gerecht => {
        this.gerecht = gerecht;
      });
    }
  }
 
  addGerecht() {
    this.gerechtService.addGerecht(this.gerecht).then(() => {
      this.router.navigateByUrl('/');
      this.showToast('Gerecht added');
    }, err => {
      this.showToast('There was a problem adding your idea :(');
    });
  }
 
  deleteGerecht() {
    this.gerechtService.deleteGerecht(this.gerecht.id).then(() => {
      this.router.navigateByUrl('/');
      this.showToast('Gerecht deleted');
    }, err => {
      this.showToast('There was a problem deleting your idea :(');
    });
  }
 
  updateGerecht() {
    this.gerechtService.updateGerecht(this.gerecht).then(() => {
      this.showToast('Gerecht updated');
    }, err => {
      this.showToast('There was a problem updating your idea :(');
    });
  }
 
  showToast(msg) {
    this.toastCtrl.create({
      message: msg,
      duration: 2000
    }).then(toast => toast.present());
  }
}