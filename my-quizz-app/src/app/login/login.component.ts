import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { FormBuilder,Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public form: FormGroup;
  username: string;
  password: string;

  constructor(private formBuilder: FormBuilder, private router: Router, private userService: UserService) { }
  ngOnInit() {
    this.form = this.formBuilder.group({});
    this.form = this.formBuilder.group({
      email:[
        '', 
        [ Validators.required, Validators.email ]
      ],
      password: [
        '', 
        [ Validators.required, Validators.minLength(4) ]
      ]
    });
  }

  login(form) {
    this.userService.login(form.email, form.password)
      .subscribe(user => {
        if (user) {
          localStorage.setItem('currentuser', JSON.stringify(user));
          this.router.navigate(['/profile']);
        } else {
        }
      },
      erro => {
        console.log(erro);
        alert(erro);
        //alert('El usuario y contraseña no coinciden');
      });
  }
}