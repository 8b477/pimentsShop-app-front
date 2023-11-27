import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { AuthService } from '@auth0/auth0-angular';
import { FormGroup, Validators, FormBuilder, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit {

public profilForm! : FormGroup
public name : AbstractControl | null = null 
public mail : AbstractControl | null = null 
public password : AbstractControl | null = null 

constructor(private _userService : UserService, private fb: FormBuilder) {}



  validateName() {
      this.profilForm.get('name')?.markAsTouched();
  }

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
    name: ['', [Validators.required, Validators.minLength(4)]],
    mail: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.pattern("^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$")]],
    });

    this.name = this.profilForm.get('test'); 
    this.mail = this.profilForm.get('mail'); 
    this.password = this.profilForm.get('password'); 
  }

  onSubmit() 
  {
    this.newUser.name = this.Inputname
    this.newUser.email = this.Inputemail
    this.newUser.password = this.Inputpassword

    console.log(JSON.stringify(this.newUser)); // ready data format .json for transfert to API

    // Appel du service pour effectuer la requête POST
    this._userService.AddUser(JSON.stringify(this.newUser)).subscribe(response => {
    console.log('Utilisateur ajouté avec succès:', response);
    // Vous pouvez ajouter d'autres actions ici après la création réussie de l'utilisateur
    }, error => {
      console.error('Erreur lors de l\'ajout de l\'utilisateur:', error);
    });
  }
}

export class User {
  name : string = ''
  email : string = ''
  password : string = ''
}
