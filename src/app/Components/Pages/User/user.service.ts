import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, tap } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt'


@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private _httpClient : HttpClient) { }

  private baseUrl : string = "https://localhost:7263/api/"
  private jwtHelper: JwtHelperService = new JwtHelperService();


  // POST NEW USER
  AddUser(newUser: string): Observable<any>
  {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this._httpClient.post(this.baseUrl + "User", newUser, { headers: headers, responseType: 'json' });
  }
    

  // POST request to log users and extract info from the token.
  UserLogin(email: string, password: string): Observable<any> 
  {
    const authData = { email: email, password: password };
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this._httpClient.post<LoginResponse>(this.baseUrl + "User/Log", authData, { headers: headers, responseType: 'json' })
      .pipe(
        tap(response => 
          {
          const token = response.token;
          console.log('JWT Token:', token);

          // Decoding
          const decodedToken = this.jwtHelper.decodeToken(token);
          console.log('Decoded Token:', decodedToken);

          // Accessing token infos
          const userId = decodedToken.nameid;
          const userRole = decodedToken.role;
          console.log('UserID:', userId);
          console.log('UserRole:', userRole);

          localStorage.setItem('id', userId);
          localStorage.setItem('role',userRole);

        }),
        catchError((error) => 
        {
          console.error('Erreur lors de la connexion :', error);
          throw error;
        })
      );
  }


//#region fisrt try

  // //----------------------------
  // // Get token from API
  // getToken(userRegister : UserRegister)
  // {
  //   // Créez un objet avec les informations d'authentification
  //   const authData : UserRegister = new UserRegister(userRegister.email, userRegister.password)

  //   this._httpClient.post(this.baseUrl + "User/Log", authData).subscribe((response : any)=>
  //   {
  //     const token = response.token
  //     this.handleToken(token) // appelle de la méthode qui stocke le token récup dans le local storage
  //   },
  //   (error)=>
  //   {
  //     console.error('Erreur lors de la récupération du token :', error)
  //   })
  // }


  // //This job is storage data from Token
  // handleToken(token: string): void
  // {
  //   // Stocke le token dans le localStorage
  //   localStorage.setItem('token', token);

  //   // extraire des informations du token ici
  //   const decodedToken = this.decodeToken(token);
  //   const userId = decodedToken.nameid;
  //   console.log('dans la méthode handleToken ' + userId);
  //   const userRole = decodedToken.role;
  //   console.log('dans la méthode handleToken ' + userRole);

  //   // Stockez ces informations dans le localStorage
  //   localStorage.setItem('userId', userId);
  //   localStorage.setItem('userRole', userRole);
  // }

  // // bibliothèque pour déchiffrer le token JWT
  // // npm install @auth0/angular-jwt
  // // import { JwtHelperService } from '@auth0/angular-jwt';
  // decodeToken(token: string): any 
  // {
  //   const helper = new JwtHelperService();
  //   return helper.decodeToken(token);
  // }

// // Exemple d'utilisation dans un composant
// const userId = localStorage.getItem('userId');
// const userRole = localStorage.getItem('userRole');

// console.log('UserID:', userId);
// console.log('UserRole:', userRole);
//#endregion
}

export class UserRegister{

  email : string
  password : string

  constructor(email : string, password :string) {
    this.email = email
    this.password = password
  }
}

// Define an interface for the response, typescript is a bitch too
// je sais pas si c'est faisable avec angular mais d'habitude je crée un dossier a part
// pour mes interfaces, ici c'est un peu degeu, mais ca marche
export interface LoginResponse 
{
  token: string;

  // Add other props expected from the JSOn if you need it bro
  // par exemple UserID: int;
  // username: string; ect....
}