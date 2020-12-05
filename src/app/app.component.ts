import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'freelance-portfolio';
  chrg: Boolean;
  chrg2:Boolean = true;
  chrg3:Boolean;

  onMenu() {
    this.chrg = true;
    this.chrg2 = false;
    this.chrg3  = true;
  }

  onMenu2() {
    this.chrg = false;
    this.chrg2 = true;
    this.chrg3  = false;
  }

}
