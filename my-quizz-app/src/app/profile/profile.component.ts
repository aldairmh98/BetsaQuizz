import { Component, OnInit } from '@angular/core';
import { Usuario } from '../model/usuario';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  usuario: Usuario;
  constructor() { }
  ngOnInit() {
    this.usuario = <Usuario> JSON.parse(localStorage.getItem('currentuser'));
    console.log(this.usuario);
  }

}
