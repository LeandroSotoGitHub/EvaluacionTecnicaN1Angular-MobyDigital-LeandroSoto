import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CharacterListComponent } from './Components/character-list/character-list.component';
import { CharacterDetailComponent } from './Components/character-detail/character-detail.component';
import { HomeComponent } from './Pages/home/home.component';
import { Error404Component } from './Pages/error404/error404.component';
import { GenderPipePipe } from './Pipes/gender-pipe.pipe';
import { StatusPipePipe } from './Pipes/status-pipe.pipe';


@NgModule({
  declarations: [
    AppComponent,
    CharacterListComponent,
    CharacterDetailComponent,
    HomeComponent,
    Error404Component,
    GenderPipePipe,
    StatusPipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
