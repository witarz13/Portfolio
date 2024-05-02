import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { HeaderComponent } from './header/header.component';
import { ChildProjectComponent } from './child-project/child-project.component';
import { FatherProjectComponent } from './father-project/father-project.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { MainAreaComponent } from './main-area/main-area.component';
import { UpperComponent } from './upper/upper.component';
import { LowerComponent } from './lower/lower.component';


@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    HeaderComponent,
    ChildProjectComponent,
    FatherProjectComponent,
    AboutMeComponent,
    MainAreaComponent,
    UpperComponent,
    LowerComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
