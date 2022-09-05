import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-vente',
  templateUrl: './detail-vente.component.html',
  styleUrls: ['./detail-vente.component.css']
})
export class DetailVenteComponent implements OnInit {

  detail={
    img:"remplacé par une photo",
    description:"Je suis l'outil de travail incontournable",
    categorie:"informatique",
    meilleure_offre:"210 points",
    mise_a_prix:"185 point",
    fin_de_enchere:"09/10/2018",
    retrait:"10 allée des Alouettes 44800 Saint Herblain",
    vendeur:"jojo44"
    
  }

  constructor() { }

  ngOnInit(): void {
  }

}
