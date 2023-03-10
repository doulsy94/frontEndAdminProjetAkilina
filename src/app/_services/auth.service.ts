import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from './token-storage.service';
import { Router } from '@angular/router';

const AUTH_API = 'http://localhost:8080/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private tokenStorage: TokenStorageService, private router: Router) { }
  login(emailOrNumero: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signin', {
      emailOrNumero,
      password
    }, httpOptions);
  }

  // logout(): Observable<any> {
  //   return this.http.post(AUTH_API + 'signout', { }, httpOptions);
  // }
  logout(): void{
    this.tokenStorage.signOut();
    this.router.navigateByUrl('login')
    window.location.reload();
  }
}
