import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as showdown from "../../lib/showdown";
import * as Maxout from "../../lib/maxout";
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { PostLoaderService } from '../post-loader.service';
declare var MathJax: any;
import { Post } from '../post';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @ViewChild('mainContent') postInner: ElementRef;
  @ViewChild('summary') summary: ElementRef;
  post: Post;

  constructor(private postLoader: PostLoaderService, private route: ActivatedRoute, private router: Router) {
    this.post = new Post();
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id: string = params.get('id');
      let path = /^\/([a-z]+)\/.+$/.exec(this.router.url);
      this.postLoader.load(path[1] + "/" + id).then((post) => {
        this.post = post;
        this.postInner.nativeElement.innerHTML = post.content;
        this.summary.nativeElement.innerHTML = post.summary;
        MathJax.Hub.Typeset(this.postInner.nativeElement, undefined);
        if (id === '2015-07-19-maxout') {
          Maxout.net0();
          Maxout.net1();
        }
      });
    });
  }

}