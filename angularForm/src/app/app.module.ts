import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule , routingComponents } from './app-routing.module';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
// import { HeadSectionComponent } from './head-section/head-section.component';


// import { HomeComponent } from './home/home.component';
// import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
