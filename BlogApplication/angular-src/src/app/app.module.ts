import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FooterComponent } from './components/footer/footer.component';

import { ValidateService } from './services/validate.service';
import { AuthService } from './services/auth.service';
import { BlogService } from './services/blog.service';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { AuthGuard } from './guards/auth.guard';
import { BlogComponent } from './components/blog/blog.component';
import { BlogCreateComponent } from './components/blog-create/blog-create.component';
import { BlogDetailComponent } from './components/blog-detail/blog-detail.component';
import { BlogEditComponent } from './components/blog-edit/blog-edit.component';

const appRoutes: Routes = [
  {path:'', component: HomeComponent},
  {path:'register', component: RegisterComponent},
  {path:'login', component: LoginComponent},
  {path:'dashboard', component: DashboardComponent, canActivate:[AuthGuard]},
  {path:'blogs', component: BlogComponent},
  {path:'blog-create', component: BlogCreateComponent, canActivate:[AuthGuard]},
  {path:'blog-details/:id', component: BlogDetailComponent},
  {path:'blog-edit/:id', component: BlogEditComponent, canActivate:[AuthGuard]}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DashboardComponent,
    FooterComponent,
    BlogComponent,
    BlogCreateComponent,
    BlogDetailComponent,
    BlogEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule.forRoot()
  ],
  providers: [ValidateService, AuthService, AuthGuard, BlogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
