import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HomeComponent } from './shared/features/home/home.component';
import { CarouselComponent } from './shared/features/carousel/carousel.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { RainComponent } from './shared/features/rooms/rain/rain.component';
import { ForestComponent } from './shared/features/rooms/forest/forest.component';
import { RoomsComponent } from './shared/features/rooms/rooms.component';
import { BookingComponent } from './shared/features/booking/booking.component';
import { FacilitiesComponent } from './shared/features/facilities/facilities.component';
import { BreakfastComponent } from './shared/features/breakfast/breakfast.component';
import { ActivitiesComponent } from './shared/features/activities/activities.component';
import { EventsComponent } from './shared/features/events/events.component';
import { ContactComponent } from './shared/features/contact/contact.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { AboutComponent } from './shared/features/about/about.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';


export function translateHttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');

}


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CarouselComponent,
    PageNotFoundComponent,
    RainComponent,
    ForestComponent,
    RoomsComponent,
    BookingComponent,
    FacilitiesComponent,
    BreakfastComponent,
    ActivitiesComponent,
    EventsComponent,
    ContactComponent,
    NavbarComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatGridListModule,
    MatCardModule,
    TranslateModule.forRoot({
      defaultLanguage: 'he'
    }),
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: translateHttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    provideAnimationsAsync()
  ],
  exports: [
    TranslateModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
