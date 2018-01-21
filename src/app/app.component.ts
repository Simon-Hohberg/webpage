import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'Simon Hohberg\'s Web Page';

  articles: Array<string> = [
    "blog/2015-07-19-maxout",
    "blog/2014-10-10-conv-net",
    // "blog/2013-12-10-perso"
  ];
  projects: Array<string> = [
    "projects/2014-07-16-mr-ensemble",
    "projects/2014-01-01-viola-jones"
  ];
  publications: Array<string> = [
    "publications/2015-09-20-master-thesis",
    "publications/2012-05-01-traffic-eval",
    "publications/2012-02-27-bachelor-thesis"
  ];
  posts: Array<string> = [];
  onStartpage: boolean = true;
  showsPost: boolean = false;
  selected = "all";

  constructor(private router: Router) {
    let path = /^(?:.+)\/\#([a-z]+)$/.exec(window.location.href);
    if (path) {
      switch (path[1]) {
        case "all":
          this.showAll();
          break;
        case "blog":
          this.showBlog();
          break;
        case "projects":
          this.showProjects();
          break;
        case "publications":
          this.showPublications();
          break;
        default:
         console.warn("Unknown reference: " + path[2]);
         break;
      }
    } else {
      this.showAll();
    }
  }

  showAll() {
    this.selected = "all";
    this.posts = [].concat(this.articles).concat(this.projects).concat(this.publications);
    this.onStartpage = true;
    this.showsPost = false;
  }

  showBlog() {
    this.selected = "blog";
    this.posts = this.articles;
    this.onStartpage = false;
    this.showsPost = false;
  }

  showProjects() {
    this.selected = "projects";
    this.posts = this.projects;
    this.onStartpage = false;
    this.showsPost = false;
  }

  showPublications() {
    this.selected = "publications";
    this.posts = this.publications;
    this.onStartpage = false;
    this.showsPost = false;
  }

  showPost() {
    this.selected = "";
    this.posts = [];
    this.showsPost = true;
    this.onStartpage = false;
  }
}
