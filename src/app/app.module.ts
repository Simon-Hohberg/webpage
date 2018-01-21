import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import  {HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AppComponent } from './app.component';
import { PostComponent } from './blog/post/post.component';
import { PostThumbComponent } from './post-thumb/post-thumb.component';
import { PostLoaderService } from './post-loader.service';

const appRoutes: Routes = [
  { path: 'blog/:id',        component: PostComponent },
  { path: 'projects/:id',     component: PostComponent },
  { path: 'publications/:id', component: PostComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    PostThumbComponent
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
  providers: [PostLoaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
