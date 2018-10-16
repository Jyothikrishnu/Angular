import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

// import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { HeadSectionComponent } from './head-section/head-section.component';

const routes : Routes = [
                { path : '', redirectTo : '/login', pathMatch: 'full'},
                { path : 'login', component: HomeComponent},
                { path : 'register', component : RegisterComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
                                  HomeComponent,
                                  RegisterComponent,
                                  HeadSectionComponent                              
                                  ];
