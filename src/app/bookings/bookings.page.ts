import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../places/places.service';
import { Place } from '../places/place.model';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.page.html',
  styleUrls: ['./bookings.page.scss'],
})
export class BookingsPage implements OnInit {

  public reserveList: [] = [];
  public places: [] = [];
  loadedPlaces: Place[];
  placesReserved: any[] = [];

  constructor(private placesService: PlacesService) { }

  ngOnInit() {
    this.loadedPlaces = this.placesService.places;
    const tamanho = localStorage.length;
    for (let i = 0; i < tamanho; i++) {
      this.placesReserved.push(this.loadedPlaces.find(x => x.id === localStorage.key(i)));
    }
    console.log(this.placesReserved);
  }

}
