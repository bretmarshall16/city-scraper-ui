import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import 'hammerjs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { resolves } from './components';
import { services } from './services';
import { MaterialModule } from './material.module';
import { A11yModule } from '@angular/cdk/a11y';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { StatsComponent } from './components/stats/stats.component';
import { SchoolComponent } from './components/school/school.component';
import { PlayerComponent } from './components/player/player.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    StatsComponent,
    SchoolComponent,
    PlayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    A11yModule,
    FlexLayoutModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [
    resolves,
    services
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
