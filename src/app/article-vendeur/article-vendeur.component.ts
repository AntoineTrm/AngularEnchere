import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article-vendeur',
  templateUrl: './article-vendeur.component.html',
  styleUrls: ['./article-vendeur.component.css']
})
export class ArticleVendeurComponent implements OnInit {

  vendu={img:'lien image',offre:'210 pts par jojo44',prix:'175 points',
  fin_de_enchere:'09/10/2018',retrait:'5 rue des Pinsons 44000 Nantes',
  vendeur:'NineJea'

}
  constructor() { }

  ngOnInit(): void {
  }

}
