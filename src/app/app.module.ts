import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  HTTP_INTERCEPTORS,
  HttpClientModule,
  HttpClient,
} from '@angular/common/http';

// material
import { AppMaterialModule } from './app.material';

// route
import { AppRoutingModule } from './app-routing.module';
import { PlaylistRoutingModule } from './modules/playlist/playlist-routing.module';

import { AppComponent } from './app.component';
import { RedirectComponent } from './core/services/auth/redirect/redirect.component';
import { HomeComponent } from './modules/home/home.component';
import { LoginComponent } from './modules/login/login.component';
import { SearchComponent } from './modules/search/search.component';
import { PlayerComponent } from './modules/player/player.component';

// modules
import { PlaylistModule } from './modules/playlist/playlist.module';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    RedirectComponent,
    HomeComponent,
    LoginComponent,
    SearchComponent,
    PlayerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppMaterialModule,
    HttpClientModule,
    FormsModule,
    PlaylistModule,
    SharedModule,
    BrowserAnimationsModule
  ],
  providers: [PlayerComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
