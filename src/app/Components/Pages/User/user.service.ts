import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt'


@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private _httpClient : HttpClient) { }

  private baseUrl : string = "https://localhost:7263/api/"

  // POST NEW USER
  AddUser(newUser: string): Observable<any>
  {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this._httpClient.post(this.baseUrl + "User", newUser, { headers: headers, responseType: 'json' });
  }
  
  // Get token from API
  getToken(userRegister : UserRegister)
  {
    // Créez un objet avec les informations d'authentification
    const authData : UserRegister = new UserRegister(userRegister.email, userRegister.password)

    this._httpClient.post(this.baseUrl + "User/Log", authData).subscribe((response : any)=>
    {
      const token = response.token
      this.handleToken(token) // appelle de la méthode qui stocke le token récup dans le local storage
    },
    (error)=>
    {
      console.error('Erreur lors de la récupération du token :', error)
    })
  }


  //This job is storage data from Token
  handleToken(token: string): void
  {
    // Stocke le token dans le localStorage
    localStorage.setItem('token', token);

    // extraire des informations du token ici
    const decodedToken = this.decodeToken(token);
    const userId = decodedToken.nameid;
    console.log('dans la méthode handleToken ' + userId);
    const userRole = decodedToken.role;
    console.log('dans la méthode handleToken ' + userRole);

    // Stockez ces informations dans le localStorage
    localStorage.setItem('userId', userId);
    localStorage.setItem('userRole', userRole);
  }

  // bibliothèque pour déchiffrer le token JWT
  // npm install @auth0/angular-jwt
  // import { JwtHelperService } from '@auth0/angular-jwt';
  decodeToken(token: string): any 
  {
    const helper = new JwtHelperService();
    return helper.decodeToken(token);
  }

// // Exemple d'utilisation dans un composant
// const userId = localStorage.getItem('userId');
// const userRole = localStorage.getItem('userRole');

// console.log('UserID:', userId);
// console.log('UserRole:', userRole);
}

export class UserRegister{

  email : string
  password : string

constructor(email : string, password :string) {
  this.email = email
  this.password = password
}

}