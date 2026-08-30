import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


import { RouteReuseStrategy } from '@angular/router';
import { IonicRouteStrategy, IonicModule } from '@ionic/angular';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { AppRoutingModule } from './app/app-routing.module';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { IonicStorageModule } from '@ionic/storage-angular';

bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(BrowserModule, IonicModule.forRoot(), AppRoutingModule, IonicStorageModule.forRoot()),
        { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
    ]
})
  .catch(err => console.log(err));
