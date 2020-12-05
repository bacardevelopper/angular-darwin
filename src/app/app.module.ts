import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { CookieService } from 'ngx-cookie-service';
import { ProjetsComponent } from './projets/projets.component';
const appRoutes: Routes = [
  { path: '', component: ProfileComponent },
  { path: 'projets', component: ProjetsComponent },
];

@NgModule({
  declarations: [AppComponent, ProfileComponent, ProjetsComponent],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
  providers: [CookieService],
  bootstrap: [AppComponent],
})
export class AppModule {}
