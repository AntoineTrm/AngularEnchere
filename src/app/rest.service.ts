import { Injectable } from '@angular/core';
import {Article} from "./dto/Article";
import { catchError, retry } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { Utilisateur } from './dto/Utilisateur';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  endpoint = 'http://localhost:8080/';
  constructor(private http: HttpClient) {
  }

  private extractData(res: Response): any {
    const body = res;
    return body || {};
  }

  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  }


  getArticles(): Observable<any> {
    return this.http.get<Article>(this.endpoint + 'articles').pipe(
      catchError(this.handleError)
    );
  }

  //faire un get article pour
  getArticle(noArticle: string): Observable<any> {
    return this.http.get<Article>(this.endpoint + 'articles/' + noArticle).pipe(
      catchError(this.handleError)
    );
  }

  //créer un utilisateur
  CreerUtilisateur(utilisateur: any): Observable<any>{
    return this.http.post(this.endpoint + 'creationUtilisateur', utilisateur).pipe
    (
      catchError(this.handleError)
    );
  }
}
