import { Component, OnInit } from '@angular/core';
import { Place } from '../../place.model';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { PlacesService } from '../../places.service';

@Component({
  selector: 'app-offer-bookings',
  templateUrl: './offer-bookings.page.html',
  styleUrls: ['./offer-bookings.page.scss'],
})
export class OfferBookingsPage implements OnInit {
  place: Place;
  constructor(private route: ActivatedRoute, private navCtrl: NavController, private placesService: PlacesService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      // checar se nao tem o id do local
      if (!paramMap.has('placeId')) {
        // navegar pra longe
        this.navCtrl.navigateBack('/places/tabs/offers');
        return;
      }
      // store or load the place
      this.place = this.placesService.places.find(p => p.id === paramMap.get('placeId'));
    });
  }

}
