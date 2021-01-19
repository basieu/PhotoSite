import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { ContactComponent } from './pages/contact/contact.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { PriceListComponent } from './pages/price-list/price-list.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

const routes: Routes = [
  {path: '', redirectTo: '/about-me', pathMatch: 'full'},
  {path: 'about-me', component: AboutMeComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'gallery', component: GalleryComponent},
  {path: 'price-list', component: PriceListComponent},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
