import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user.component';
import { AboutComponent } from './components/about.component';
import { PostService } from './services/posts.service';
import { routing } from './app.routing';

@NgModule({
  imports: [BrowserModule, FormsModule, routing],
  declarations: [AppComponent, UserComponent, AboutComponent],
  providers: [PostService, provideHttpClient()],
  bootstrap: [AppComponent],
})
export class AppModule {}
