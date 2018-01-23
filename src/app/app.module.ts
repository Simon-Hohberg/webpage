import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import  {HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { PostThumbComponent } from './post-thumb/post-thumb.component';
import { PostLoaderService } from './post-loader.service';
import { ConfigService } from './config.service';
import { PostListComponent } from './post-list/post-list.component';

const appRoutes: Routes = [
  { path: '',                 component: PostListComponent },
  { path: 'blog',             component: PostListComponent },
  { path: 'project',         component: PostListComponent },
  { path: 'publication',     component: PostListComponent },
  { path: 'blog/:id',         component: PostComponent },
  { path: 'project/:id',     component: PostComponent },
  { path: 'publication/:id', component: PostComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    PostThumbComponent,
    PostListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    HttpClientModule,
    BrowserAnimationsModule,
    AngularFontAwesomeModule
  ],
  providers: [PostLoaderService, ConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
