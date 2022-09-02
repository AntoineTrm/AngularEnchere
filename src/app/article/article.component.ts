import { Component, OnInit } from '@angular/core';
import {Article} from "../dto/Article";
import { RestService} from "../rest.service";
import { Router} from "@angular/router";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  articles: Article[] = [];
  constructor(public rest: RestService, private router: Router) { }

  ngOnInit(): void {
    this.getArticles();

  }

  getArticles(): void {
    this.rest.getArticles().subscribe((resp: any) => {
      this.articles = resp;
      console.log(this.articles);
    });
  }

}
