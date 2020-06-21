import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, PreloadAllModules } from '@angular/router';

// COMPONENTES DE LAS PAGINAS LOGIN
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

// COMPONENTES DE LAS PAGINAS DASHBOARD
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarsComponent } from './componentss/navbars/navbars.component';
import { FootersComponent } from './componentss/footers/footers.component';

// COMPONENTES DE LA PAGINA PROFILE
import { ProfileComponent } from './profile/profile.component';
import { Navbar_profileComponent } from './components_profile/navbar_profile/navbar_profile.component';
import { Footer_profileComponent } from './components_profile/footer_profile/footer_profile.component';
import { Perfil1Component } from './perfiles/perfil1/perfil1.component';
import { Perfil2Component } from './perfiles/perfil2/perfil2.component';
import { Perfil3Component } from './perfiles/perfil3/perfil3.component';
import { Perfil4Component } from './perfiles/perfil4/perfil4.component';
import { Perfil5Component } from './perfiles/perfil5/perfil5.component';
import { Perfil6Component } from './perfiles/perfil6/perfil6.component';
import { Perfil7Component } from './perfiles/perfil7/perfil7.component';
import { Perfil8Component } from './perfiles/perfil8/perfil8.component';
import { Perfil9Component } from './perfiles/perfil9/perfil9.component';
import { Perfil10Component } from './perfiles/perfil10/perfil10.component';
import { Perfil11Component } from './perfiles/perfil11/perfil11.component';
import { Perfil12Component } from './perfiles/perfil12/perfil12.component';
import { PerfilComponent } from './perfil/perfil.component';
import { HttpClientModule } from '@angular/common/http';
import { UsuarioService } from './services/usuario/usuario.service';


const routes = [
  { path: '', component: LoginComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'perfil1', component: Perfil1Component},
  { path: 'perfil2', component: Perfil2Component},
  { path: 'perfil3', component: Perfil3Component},
  { path: 'perfil4', component: Perfil4Component},
  { path: 'perfil5', component: Perfil5Component},
  { path: 'perfil6', component: Perfil6Component},
  { path: 'perfil7', component: Perfil7Component},
  { path: 'perfil8', component: Perfil8Component},
  { path: 'perfil9', component: Perfil9Component},
  { path: 'perfil10', component: Perfil10Component},
  { path: 'perfil11', component: Perfil11Component},
  { path: 'perfil12', component: Perfil12Component},

];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    FooterComponent,
    DashboardComponent,
    NavbarsComponent,
    FootersComponent,
    ProfileComponent,
    Footer_profileComponent,
    Navbar_profileComponent,
    Perfil1Component,
    Perfil2Component,
    Perfil3Component,
    Perfil4Component,
    Perfil5Component,
    Perfil6Component,
    Perfil7Component,
    Perfil8Component,
    Perfil9Component,
    Perfil10Component,
    Perfil11Component,
    Perfil12Component,
    PerfilComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    UsuarioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
