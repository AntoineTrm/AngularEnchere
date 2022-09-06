import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Connexion } from '../dto/Connexion';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
  formulaireConnexion!: FormGroup;
  identifiant: string ="";
  password: string ="";
  constructor(private formBuilder: FormBuilder, public rest: RestService, private router: Router) {
   }

  ngOnInit(): void {
    this.formulaireConnexion = new FormGroup({
      identifiant: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      password: new FormControl(null, [Validators.required, Validators.minLength(3)])
    });
  }

  connecterUtilisateur(){
    this.rest.connecterUtilisateur(new Connexion (this.identifiant, this.password)).subscribe((resp: any) => {

      console.log("verif");
    });
  }
}
