import { Component } from '@angular/core';
import { IdeeService } from '../_services/idee.service';
import { UsersService } from '../_services/users.service';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-listeidee',
  templateUrl: './listeidee.component.html',
  styleUrls: ['./listeidee.component.css']
})
export class ListeideeComponent {

  menuBureau: boolean = true;
  menuMobile: boolean = false;
  
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

   constructor(   private breakpointObserver: BreakpointObserver, private ideeService: IdeeService, private usersService: UsersService) { }

   ngOnInit(): void {

        // ==================menu cacher en mobile a partir de 767px ==========

        this.breakpointObserver
        .observe(['(max-width: 767px)'])
        .subscribe((state: BreakpointState) => {
          if (state.matches) {
            this.menuBureau = false;
            this.menuMobile = true;
          } else {
            this.menuBureau = true;
            this.menuMobile = false;
          }
        });

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
   afficheMenuMobile() {
    this.menuBureau = true;
    this.menuMobile = false;
  }

}
