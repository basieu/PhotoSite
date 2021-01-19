import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { ContactComponent } from './pages/contact/contact.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { PriceListComponent } from './pages/price-list/price-list.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ImageService } from './services/image.service';

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    ContactComponent,
    GalleryComponent,
    PriceListComponent,
    PageNotFoundComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
