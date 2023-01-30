import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';
import { TokenStorageService } from '../_services/token-storage.service';
import { UsersService } from '../_services/users.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent {
  id_user:any
  username: any
  imageuser: any
  numero:any
  email:any
  addresse:any

  constructor(private authService: AuthService, private route: ActivatedRoute, private user: UsersService, private http: HttpClient, private storageService: TokenStorageService, private router: Router,){}
  
  ngOnInit() {
    this.id_user=this.storageService.getUser().id_user;
    console.log("identifiant" +this.id_user)

    this.user.listerUserParId(this.id_user).subscribe(data =>{
      console.log("data: " +JSON.stringify(data))
      this.username = data.username;
      // this.numero = data.numero;
      // this.email = data.email;
      // this.addresse = data.addresse;
      this.imageuser = data.imageuser;
       
      })
  }

  //METHODE PERMETTANT DE RECUPERER L'IMAGE DU MINISTERE
  recuperationImageUser(event: any) {

    this.imageuser = event.target["files"][0];
    console.log(this.imageuser)

  }

  logout(): void{
    this.storageService.signOut();
    this.router.navigateByUrl('login')
  
  }
}

