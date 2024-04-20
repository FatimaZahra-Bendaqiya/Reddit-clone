import { Component } from '@angular/core';
import {Article} from "./article/article.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articles: Article[];

  constructor() {
    this.articles=[
      new Article('People we meet on vacation', 'https://www.goodreads.com/book/show/54985743-people-we-meet-on-vacation', 7),
      new Article('Pride and Prejudice', 'https://www.goodreads.com/book/show/1885.Pride_and_Prejudice?ref=nav_sb_ss_1_11', 8),
      new Article('Polish for dummies', 'https://www.goodreads.com/book/show/13839214-polish-for-dummies?from_search=true&from_srp=true&qid=biYJivIXhO&rank=1', 10),
    ]
  }
  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean{
    console.log(`Adding article title: ${title.value} and link: ${link.value}`);
    this.articles.push(new Article(title.value, link.value, 0));
    title.value='';
    link.value='';
    return false;
  }

  sortedArticles(): Article[] {
    return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
  }
}
