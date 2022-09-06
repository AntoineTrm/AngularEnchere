export class Connexion {
  //Connexion":    {
  //       "pseudo": "gzetsu",
  //       "motDePasse": "zbeub",


  private pseudo: string;
  private motDePasse: string;

  constructor(pseudo: string, motDePasse: string) {
    this.pseudo=pseudo;
    this.motDePasse=motDePasse;
  }

  public getPseudo(): string {
		return this.pseudo;
	}

  public getMotDePasse(): string {
		return this.motDePasse;
	}
	public setMotDePasse(motDePasse:string):void {
		this.motDePasse = motDePasse;
	}

}
