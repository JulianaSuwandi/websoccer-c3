import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { ScoringsComponent } from './scorings/scorings.component';
import { StandingsComponent } from './standings/standings.component';
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    ScoringsComponent,
    StandingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
