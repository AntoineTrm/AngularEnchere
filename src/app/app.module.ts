import { NgModule } from '@angular/core';
import { BrowserModule, createApplication } from '@angular/platform-browser'
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
import { DetailVenteComponent } from './detail-vente/detail-vente.component';
import { NouvelleVenteComponent } from './nouvelle-vente/nouvelle-vente.component';
import { EnchereRemporteComponent } from './enchere-remporte/enchere-remporte.component';
import { ArticleVendeurComponent } from './article-vendeur/article-vendeur.component';


const appRoutes: Routes = [
  
  {path: 'en-tete',component:EnTeteComponent},
  {path:'connexion',component:ConnexionComponent},
  {path:'liste-enchere',component:ListeEnchereComponent},
  {path:'article',component:ArticleComponent},
  {path:'creation',component:CreationComponent},
  {path:'creer-un-compte',component:CreerUnCompteComponent},
  {path:'profil',component:ProfilComponent},
  {path:'modifier-profil',component:ModifierProfilComponent},
  {path:'detail-vente',component:DetailVenteComponent},
  {path:'nouvelle-vente',component:NouvelleVenteComponent},
  {path:'enchere-remporte',component:EnchereRemporteComponent},
  {path:'',redirectTo:'/liste-enchere',pathMatch:'full'}





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
    ModifierProfilComponent,
    DetailVenteComponent,
    NouvelleVenteComponent,
    EnchereRemporteComponent,
    ArticleVendeurComponent
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
