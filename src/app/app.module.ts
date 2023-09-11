import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CardsComponent } from './components/cards/cards.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { LabelCardComponent } from './components/cards/label-card/label-card.component';
import { PriceCardComponent } from './components/cards/price-card/price-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardsComponent,
    MenuBarComponent,
    LabelCardComponent,
    PriceCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
