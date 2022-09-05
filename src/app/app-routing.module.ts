import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ArticleComponent} from "./article/article.component";
import { CreerUnCompteComponent } from './creer-un-compte/creer-un-compte.component';


const routes: Routes = [
  {
  path: 'articles',
  component: ArticleComponent,
  data: {title: 'Article List'}
  },
  {
    path: 'creationUtilisateur',
    component: CreerUnCompteComponent,
    data: {title: 'Ajouter Utilisateur'}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
