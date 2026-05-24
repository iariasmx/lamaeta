import { provideRouter, Routes, withHashLocation } from '@angular/router';

import { HomeComponent } from './home/home';
import { RentalComponent } from './rental/rental';
import { ContactComponent } from './contact/contact';
import { NavbarComponent } from './navbar/navbar';
import { FooterComponent } from './footer/footer';
import { ApplicationConfig } from '@angular/core';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'rental', component: RentalComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'footer', component: FooterComponent },
  { path: '**', redirectTo: '/home' }
];

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes, withHashLocation())]
};
