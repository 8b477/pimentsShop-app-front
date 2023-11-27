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

  log()
  {
    this._userService.UserLogin(this.email, this.password)
                      .subscribe(response =>
                      {

                        this.userId = localStorage.getItem('id')
                        this.userRole = localStorage.getItem('role')

                        console.log('via le this ', this.userId);
                        console.log('via le this ', this.userRole);

                        console.log("====================");

                        console.log('via le storage ', localStorage.getItem('id'));
                        console.log('via le storage ', localStorage.getItem('role'));
                      }),
                      (error : Error) => 
                      {
                        console.error('Error during login ', error)
                      }
  }

  testLocalStorage()
  {
    console.log('via le this ', this.userId);
    console.log('via le this ', this.userRole);

    console.log("====================");

    console.log('via le storage ', localStorage.getItem('userId'));
    console.log('via le storage ', localStorage.getItem('userRole'));
  }
}
