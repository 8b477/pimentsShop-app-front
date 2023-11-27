import { AuthService, User } from '@auth0/auth0-angular';
import { UserRegister, UserService } from './../user.service';
import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrl: './connection.component.scss'
})
export class ConnectionComponent {

  private userId : string | null = ''
  private userRole : string | null = ''


constructor(private _userService : UserService, public _auth : AuthService, private fb: FormBuilder) {}


public profilForm! : FormGroup
public mail : AbstractControl | null = null
public password : AbstractControl | null = null 



validateMail() {
      this.profilForm.get('mail')?.markAsTouched();
  }

validatePassword() {
      this.profilForm.get('password')?.markAsTouched();
  }


  Inputname  = '' // recover value of view
  Inputemail  = '' 
  Inputpassword  = ''

  newUser : User = new User();

  ngOnInit() {
    // Clean field
    this.Inputname = ''
    this.Inputemail = ''
    this.Inputpassword = ''

    this.profilForm = this.fb.group({
    mail: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.pattern("^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$")]],
    });
 
    this.mail = this.profilForm.get('mail'); 
    this.password = this.profilForm.get('password'); 
  }
  log()
  {
    this._userService.UserLogin(this.Inputemail, this.Inputpassword)
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

}
