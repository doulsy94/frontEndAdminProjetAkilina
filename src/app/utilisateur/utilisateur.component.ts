import { Component } from '@angular/core';
import { UsersService } from '../_services/users.service';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.css']
})
export class UtilisateurComponent {

  
  //VARIABLE CONTENANT LES INFORMATIONS DES COMMENTAIRES PAR IDEES RECUPERER
  users: any;

  //DECLARATION DES DIFFERENTS ATTRIBUT DE LA TABLE MINISTERE POUR MODIFIER
  username: any;
  email: any;
  numero: any;
  addresse: any;

  //VARIABLE PERMETTANT D'AFFIRMER LA VALIDATION
  isTrueP!: boolean;
  isNoTrueP!: boolean;

  //VARIABLE PERMETTANT LA VALIDATION 
  isNoTrueR!: boolean;
  isTrueR!: boolean;

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {

//METHODE PERMETTANT DE RECUPERER LA LISTE DES USERS
  this.usersService.listerUser().subscribe(data => {
  this.users = data;
  console.log(data);
});


}
}
