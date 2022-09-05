import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-creer-un-compte',
  templateUrl: './creer-un-compte.component.html',
  styleUrls: ['./creer-un-compte.component.css']
})
export class CreerUnCompteComponent implements OnInit {

  constructor(public rest: RestService, private router: Router) { }

  ngOnInit(): void {
  }

  ajouterUtilisateur(): void {
    this.ajouterUtilisateur
  }

}
