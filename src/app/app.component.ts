import { Component } from '@angular/core';
import { TokenStorageService } from './_services/token-storage.service';
import { AuthService } from './_services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'APIAKILINAINTERFACEADMIN';

  
  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  emailOrNumero?: string;

  constructor(private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');

      this.emailOrNumero = user.emailOrNumero;
    }
  }


  logout(): void {
    
    this.tokenStorageService.signOut();
    window.location.reload();
  }

}
