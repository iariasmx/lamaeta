import { Routes } from '@angular/router';

import { HomeComponent } from './home/home';
import { RentalComponent } from './rental/rental';
import { ContactComponent } from './contact/contact';
import { NavbarComponent } from './navbar/navbar';
import { FooterComponent } from './footer/footer';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'rental', component: RentalComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'footer', component: FooterComponent },
  { path: '**', redirectTo: '/home' }
];