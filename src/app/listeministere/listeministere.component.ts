import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { CommentaireService } from '../_services/commentaire.service';
import { IdeeService } from '../_services/idee.service';
import { MinistereService } from '../_services/ministere.service';
import { UsersService } from '../_services/users.service';

@Component({
  selector: 'app-listeministere',
  templateUrl: './listeministere.component.html',
  styleUrls: ['./listeministere.component.css']
})
export class ListeministereComponent {

  menuBureau: boolean = true;
  menuMobile: boolean = false;

  //VARIABLE CONTENANT LES INFORMATIONS DES MINISTERES RECUPERER
  ministere: any;

  //DECLARATION DES DIFFERENTS ATTRIBUT DE LA TABLE MINISTERE POUR MODIFIER
  libelle: any;
  description: any;
  image: any;



  //VARIABLE PERMETTANT D'AFFIRMER LA VALIDATION
  isTrueP!: boolean;
  isNoTrueP!: boolean;

  //VARIABLE PERMETTANT LA VALIDATION 
  isNoTrueR!: boolean;
  isTrueR!: boolean;

  constructor(   private breakpointObserver: BreakpointObserver,private ministereService: MinistereService, private ideeService: IdeeService, private commentaireService: CommentaireService, private usersService: UsersService) { }

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

 //METHODE PERMETTANT DE RECUPERER LA LISTE DES MINISTERE
 this.ministereService.listerMinistere().subscribe(data => {
  this.ministere = data;
  console.log(data);
});


// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll<HTMLInputElement>('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()

}
/***************************** PARTIE MINISTERE *************************************/

  //METHODE PERMETTANT DE RECUPERER L'IMAGE DU MINISTERE
  recuperationImageMinistere(event: any) {

    this.image = event.target["files"][0];
    console.log(this.image)

  }

 //METHODE PERMETTANT D'ACTUALISER LA PAGE UNE FOIS LES DONNER AJOUTER
 reloadPage(): void {
  window.location.reload();
}

afficheMenuMobile() {
  this.menuBureau = true;
  this.menuMobile = false;
}


}
