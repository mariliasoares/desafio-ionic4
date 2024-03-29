import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'places', pathMatch: 'full' },
  { path: 'places', loadChildren: './places/places.module#PlacesPageModule' },
  { path: 'bookings', loadChildren: './bookings/bookings.module#BookingsPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
