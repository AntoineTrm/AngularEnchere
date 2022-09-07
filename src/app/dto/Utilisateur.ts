import {Article} from "./Article";

export class Utilisateur {
  //vendeur":    {
  //       "noUtilisateur": 0,
  //       "pseudo": "gzetsu",
  //       "nom": "tur",
  //       "prenom": "ant",
  //       "email": "mail",
  //       "telephone": "8522",
  //       "rue": "54res rere",
  //       "codePostal": "79000",
  //       "ville": "niort",
  //       "motDePasse": "zbeub",
  //       "credit": 25,
  //       "administrateur": false,
  //       "listeArticles": null,
  //       "listeEncheres": null

  /* attribut de l'interface changé en classe
  noUtilisateur: string;
  pseudo: string;
  nom: string;
  prenom: string;
  email: string;
  telephone: string;
  rue: string;
  codePostal: string;
  ville: string;
  motDePasse: string;
  credit: number;
  administrateur: boolean;
  listeArticles: [];
  listeEncheres: [];*/

  noUtilisateur: string | undefined;
  pseudo: string;
  nom: string;
  prenom: string;
  email: string;
  telephone: string;
  rue: string;
  codePostal: string;
  ville: string;
  motDePasse: string;
  credit: number = 0;
  administrateur: boolean = false;
  listeArticles: [] | undefined;
  listeEncheres: [] | undefined;

  constructor(pseudo: string, nom: string, prenom: string, email: string, telephone: string,
              rue: string, codePostal: string, ville: string, motDePasse: string) {
    this.pseudo=pseudo;
    this.nom=nom;
    this.prenom=prenom;
    this.email=email;
    this.telephone=telephone;
    this.rue=rue;
    this.codePostal=codePostal;
    this.ville=ville;
    this.motDePasse=motDePasse;
  }
}
