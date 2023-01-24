import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListeideeComponent } from './listeidee/listeidee.component';
import { ListeministereComponent } from './listeministere/listeministere.component';
import { LoginComponent } from './login/login.component';
import { NotificationComponent } from './notification/notification.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'home', component: HomeComponent},
  { path: 'sidenav', component: SideNavComponent},
  { path: 'sidenav', component: SideNavComponent},
  { path: 'listeministere', component: ListeministereComponent},
  { path: 'listeidee', component: ListeideeComponent},
  { path: 'utilisateur', component: UtilisateurComponent},
  { path: 'notification', component: NotificationComponent},

  { path: '', redirectTo: 'login', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
