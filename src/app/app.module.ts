import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import {RouterModule, Routes} from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EnTeteComponent } from './en-tete/en-tete.component';
import { ListeEnchereComponent } from './liste-enchere/liste-enchere.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { ArticleComponent } from './article/article.component';
import { CreationComponent } from './creation/creation.component';
import { CreerUnCompteComponent } from './creer-un-compte/creer-un-compte.component';
import { ProfilComponent } from './profil/profil.component';
import { ModifierProfilComponent } from './modifier-profil/modifier-profil.component';


const appRoutes: Routes = [
  

];

@NgModule({
  declarations: [
    AppComponent,
    EnTeteComponent,
    ListeEnchereComponent,
    ConnexionComponent,
    ArticleComponent,
    CreationComponent,
    CreerUnCompteComponent,
    ProfilComponent,
    ModifierProfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes, {onSameUrlNavigation: 'reload'}),
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
