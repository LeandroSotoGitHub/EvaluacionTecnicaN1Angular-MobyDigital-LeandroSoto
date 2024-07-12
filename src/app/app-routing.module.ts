import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterDetailComponent } from './Components/character-detail/character-detail.component';
import { CharacterListComponent } from './Components/character-list/character-list.component';
import { HomeComponent } from './Pages/home/home.component';
import { Error404Component } from './Pages/error404/error404.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'characters', component: CharacterListComponent },
  { path: 'characters/:id', component: CharacterDetailComponent},
  { path: '404', component: Error404Component},
  { path: '**', redirectTo:'/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
