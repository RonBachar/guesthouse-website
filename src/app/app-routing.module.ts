import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
const routes: Routes = [
    { path: '', component: HomeComponent },
    // { path: 'home', component: HomeComponent },
    // { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
    // { path: 'contact', loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule) },
    // { path: 'gallery', loadChildren: () => import('./gallery/gallery.module').then(m => m.GalleryModule) },
    // { path: 'rooms', loadChildren: () => import('./rooms/rooms.module').then(m => m.RoomsModule) },
    // { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
