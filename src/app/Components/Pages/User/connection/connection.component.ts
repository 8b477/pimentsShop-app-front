import { AuthService } from '@auth0/auth0-angular';
import { UserRegister, UserService } from './../user.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrl: './connection.component.scss'
})
export class ConnectionComponent {

  public email : string = ''
  public password : string = ''
  private userId : string | null = ''
  private userRole : string | null = ''


constructor(private _userService : UserService, public _auth : AuthService) {}



  // submitForm()
  // {
  //   // Envoie du formulaire
  // }

  // log()
  // {
  //   this._userService.getToken(new UserRegister(this.email, this.password));

  //   this.userId = localStorage.getItem('userId');
  //   this.userRole = localStorage.getItem('userRole');

  //   console.log('(dans le log) UserID: ', this.userId);
  //   console.log('(dans le log) UserRole: ', this.userRole);


  // }

}
