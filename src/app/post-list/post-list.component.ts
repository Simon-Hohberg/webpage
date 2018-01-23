import { Component, Input, OnInit } from '@angular/core';
import { PostLoaderService } from '../post-loader.service';
import { Post } from '../post';
import { Router, ActivatedRoute } from '@angular/router';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts: Array<string> = [];
  path: string = "";

  constructor(private postLoader: PostLoaderService, private config: ConfigService, private router: Router, route: ActivatedRoute) {
    route.url.subscribe( url => {
      if (url.length > 0) {
        this.path = url[0].path;
      } else {
        this.path = "";
      }
    });
  }

  ngOnInit() {
    this.updatePosts();
  }

  updatePosts() {
    switch (this.path) {
      case "":
        this.showAll();
        break;
      case "blog":
        this.showBlog();
        break;
      case "project":
        this.showProjects();
        break;
      case "publication":
        this.showPublications();
        break;
      default:
        console.warn("Unknown reference: " + this.path);
        break;
    }
  }


  showAll() {
    this.posts = [].concat(this.config.blogPosts).concat(this.config.projectPosts).concat(this.config.publicationPosts);
  }

  showBlog() {
    this.posts = this.config.blogPosts;
  }

  showProjects() {
    this.posts = this.config.projectPosts;
  }

  showPublications() {
    this.posts = this.config.publicationPosts;
  }

  getPath(postId) {
    if (this.path != "") {
      return postId;
    }
    let type = this.getType(postId);
    return type + '/' + postId;
  }

  getType(postId) {
    if (this.config.blogPosts.indexOf(postId) !== -1) {
      return 'blog';
    } else if (this.config.projectPosts.indexOf(postId) !== -1) {
      return 'project';
    } else if (this.config.publicationPosts.indexOf(postId) !== -1) {
      return 'publication';
    }
    return '';
  }
  
}
