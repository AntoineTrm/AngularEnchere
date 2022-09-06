import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enchere-remporte',
  templateUrl: './enchere-remporte.component.html',
  styleUrls: ['./enchere-remporte.component.css']
})
export class EnchereRemporteComponent implements OnInit {

  remporte={img:'insérer image', offre:'250 pts',
   prix:'185 points',retrait:'10 allée des Alouettes 44800 Saint Herblain',
  vendeur:'jojo44', tel:'06256521666'}
  
  constructor() { }

  ngOnInit(): void {
  }

}
