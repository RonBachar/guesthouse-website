import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/features/home/home.component';
import { AboutComponent } from './shared/features/about/about.component';
import { BookingComponent } from './shared/features/booking/booking.component';
import { RoomsComponent } from './shared/features/rooms/rooms.component';
import { RainComponent } from './shared/features/rooms/rain/rain.component';
import { ForestComponent } from './shared/features/rooms/forest/forest.component';
import { FacilitiesComponent } from './shared/features/facilities/facilities.component';
import { BreakfastComponent } from './shared/features/breakfast/breakfast.component';
import { ActivitiesComponent } from './shared/features/activities/activities.component';
import { EventsComponent } from './shared/features/events/events.component';
import { ContactComponent } from './shared/features/contact/contact.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'bookings', component: BookingComponent },
  { path: 'rain', component: RainComponent },
  { path: 'forest', component: ForestComponent },
  { path: 'facilities', component: FacilitiesComponent },
  { path: 'breakfast', component: BreakfastComponent },
  { path: 'activities', component: ActivitiesComponent },
  { path: 'events', component: EventsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'booking', component: BookingComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
