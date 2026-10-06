import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user.component';
import { PostService } from './services/posts.service';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule, RouterModule.forRoot([])],
  declarations: [AppComponent, UserComponent],
  providers: [PostService],
  bootstrap: [AppComponent],
})
export class AppModule {}
