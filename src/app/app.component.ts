import { Component } from '@angular/core';
import { IonApp, IonContent, IonRouterOutlet } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  logoIonic,
  calendarOutline,
  bagHandleOutline,
  personOutline,
  fitnessOutline,
  receiptOutline,
} from 'ionicons/icons';
import { StatusBar } from '@capacitor/status-bar';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonContent, IonRouterOutlet],
})
export class AppComponent {
  constructor() {
    StatusBar.setOverlaysWebView({ overlay: false });

    addIcons({
      logoIonic,
      calendarOutline,
      bagHandleOutline,
      personOutline,
      fitnessOutline,
      receiptOutline,
    });
  }
}
