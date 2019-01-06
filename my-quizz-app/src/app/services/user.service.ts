import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../model/usuario';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url: string;

  constructor(private http: HttpClient) {
    this.url = 'https://quizzer.appspot.com/';
   }

  create(user: Usuario) {
    let urlhit = this.url;
    urlhit += 'usuarios';
    return this.http.post(urlhit, user);
  }

}
