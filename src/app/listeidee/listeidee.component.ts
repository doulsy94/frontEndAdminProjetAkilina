import { Component } from '@angular/core';
import { IdeeService } from '../_services/idee.service';
import { UsersService } from '../_services/users.service';

@Component({
  selector: 'app-listeidee',
  templateUrl: './listeidee.component.html',
  styleUrls: ['./listeidee.component.css']
})
export class ListeideeComponent {

  //VARIABLE CONTENANT LES INFORMATIONS DES IDEES RECUPERER
  idee: any;

   //VARIABLE CONTENANT LES INFORMATIONS DES IDEES RECUPERER
   users: any;


  //DECLARATION DES DIFFERENTS ATTRIBUT DE LA TABLE IDEE
  contexte: any;
  contenu: any;
  nbrejaime: any;
  nbrejaimepas: any;

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

   constructor(private ideeService: IdeeService, private usersService: UsersService) { }

   ngOnInit(): void {

    //METHODE PERMETTANT DE RECUPERER LA LISTE DES IDEES
    this.ideeService.listerIdee().subscribe(data => {
      this.idee = data;     
      console.log(data);
    });

        //METHODE PERMETTANT DE RECUPERER LA LISTE DES USERS
    this.usersService.listerUser().subscribe(data => {
      this.users = data;
      console.log(data);
    });
   }
 

}
