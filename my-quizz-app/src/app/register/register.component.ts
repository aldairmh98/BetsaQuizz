import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators, FormGroup } from '@angular/forms';
import {UserService} from '../services/user.service';
import {Usuario} from '../model/usuario';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public form: FormGroup;
  name : string;
  password: string;

  constructor(private formBuilder: FormBuilder, private userService: UserService) { }

  ngOnInit() {
    this.form = this.formBuilder.group({});
    this.name = '';
    this.form = this.formBuilder.group({
      email:[
        '', 
        [ Validators.required, Validators.email ]
      ],
      name: [
        this.name.toLowerCase(),
        Validators.required
      ],
      password: [
        '', 
        [ Validators.required, Validators.minLength(4) ]
      ]
    });
  }

  onSubmit(formValue: any){
    let user = new Usuario();
    user.username = formValue.name;
    user.password = formValue.password;
    user.email = formValue.email;
    this.userService.create(user);
  }
  
}
