import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestService } from '../rest.service';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Utilisateur} from "../dto/Utilisateur";

@Component({
  selector: 'app-creer-un-compte',
  templateUrl: './creer-un-compte.component.html',
  styleUrls: ['./creer-un-compte.component.css']
})
export class CreerUnCompteComponent implements OnInit {
  formulaireCreerCompte!: FormGroup;
  pseudo: string ="";
  nom: string ="";
  prenom: string ="";
  email: string ="";
  telephone: string ="";
  rue: string ="";
  codePostal: string ="";
  ville: string ="";
  password: string ="";
  confirmPassword: string ="";


  constructor(public rest: RestService, private router: Router) { }

  ngOnInit(): void {
    this.formulaireCreerCompte = new FormGroup({
      pseudo: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      nom: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      prenom: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      email: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      telephone: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      rue: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      codePostal: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      ville: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      password: new FormControl(null, [Validators.required, Validators.minLength(3)])
    });
  }

  ajouterUtilisateur(): void {
    this.rest.creerUtilisateur(new Utilisateur(this.pseudo, this.nom, this.prenom, this.email,
      this.telephone, this.rue, this.codePostal, this.ville, this.password)).subscribe((resp:any)=> {
        console.log("transmis")
    } )
  }

}
