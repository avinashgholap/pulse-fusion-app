import { Component } from '@angular/core';
import {
  IonHeader,
  IonContent,
  IonFooter,
  IonRouterOutlet,
  IonToolbar,
} from '@ionic/angular/standalone';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    IonHeader,
    HeaderComponent,
    IonRouterOutlet,
    IonFooter,
    FooterComponent,
    IonToolbar,
    IonToolbar,
    IonContent,
  ],
})
export class HomePage {
  constructor() {}
}
