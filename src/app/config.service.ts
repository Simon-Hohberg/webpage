import { Injectable } from '@angular/core';

@Injectable()
export class ConfigService {

  public readonly title = 'Simon Hohberg\'s Web Page';

  public readonly blogPosts: Array<string> = [
    "2015-07-19-maxout",
    "2014-10-10-conv-net",
    // "blog/2013-12-10-perso"
  ];
  public readonly projectPosts: Array<string> = [
    "2014-07-16-mr-ensemble",
    "2014-01-01-viola-jones"
  ];
  public readonly publicationPosts: Array<string> = [
    "2015-09-20-master-thesis",
    "2012-05-01-traffic-eval",
    "2012-02-27-bachelor-thesis"
  ];

  constructor() { }

}
