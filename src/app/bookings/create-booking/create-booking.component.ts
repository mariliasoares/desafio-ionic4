import { Component, OnInit, Input } from '@angular/core';
import { Place } from 'src/app/places/place.model';
import { ModalController } from '@ionic/angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RouterLink, ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.scss']
})
export class CreateBookingComponent implements OnInit {
  form: FormGroup;
  @Input() selectedPlace: Place;

  lugar = {firstName: '', lastName: '', guestNumber: '', dateFrom: '', dateTo: ''};


  constructor(
    private modalCtrl: ModalController,
    // private router: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit() {

  }

  onCancel(){
    this.modalCtrl.dismiss(null, 'cancel');
  }

  onSubmit() {
    console.log('reservando');
    console.log(this.lugar);
    const places = this.router.url.split('/', 5);
    localStorage.setItem(places[4], JSON.stringify(this.lugar));
    // TODO: REDIRECIONAR PARA PAGINA INICIAL.
  }

  onBookPlace() {
    this.modalCtrl.dismiss({message: 'Uma mensagem teste'}, 'confirm');
  }
}
